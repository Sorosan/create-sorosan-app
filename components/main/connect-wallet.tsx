"use client";

import { useSorosanSDK } from "@sorosan-sdk/react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { disconnect } from "process";

interface ConnectWalletProps extends
    React.HTMLAttributes<HTMLButtonElement> {
}

export const ConnectWallet = ({ className, ...props }: ConnectWalletProps) => {
    const { sdk } = useSorosanSDK();
    const [address, setAddress] = useState("");

    useEffect(() => {
        (async () => {
            if (await sdk.login()) {
                setAddress(sdk.publicKey);
            }
        })();
    }, []);

    const connect = async () => {
        const isValid = await sdk.connectWallet();
        console.log(isValid);
    }

    const disconnect = () => {
        setAddress("");
    }

    return (
        <Button className={className}
            onClick={address ? connect : disconnect} {...props}
        >
            {address ? sdk.util.mask(address) : "Connect Wallet"}
        </Button>
    )
}