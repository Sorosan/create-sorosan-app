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

    // useEffect(() => {
    //     (async () => {
    //         // if (await sdk.login()) {
    //         //     console.log(sdk.publicKey);
    //         //     setAddress(sdk.publicKey);
    //         // }
    //     })();
    // }, []);

    const connect = async () => {
        console.log("Connecting Wallet ...")
        try {
            const isValid = await sdk.connectWallet();
            console.log("Connect Wallet Status: ", isValid);
            setAddress(sdk.publicKey);
        } catch (e) {
            console.log(e);
        }
    }

    const disconnect = () => {
        setAddress("");
    }

    return (
        <Button className={className}
            onClick={connect} {...props}
        >
            {address ? sdk.util.mask(address) : "Connect Wallet"}
        </Button>
    )
}
