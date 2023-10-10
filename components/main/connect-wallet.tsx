"use client";

import { useSorosanSDK } from "@sorosan-sdk/react";
import { useState } from "react";
import { Button } from "../ui/button";
import { getPublicKey } from "@stellar/freighter-api";

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
        try {
            // const connected = await sdk.connectWallet();
            const publicKey = await getPublicKey();

            const address = await sdk.publicKey || publicKey;
            console.log(address);
            setAddress(address);
        } catch (error) {
            console.log(error);
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
