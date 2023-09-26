"use client";

import { useSorosanSDK } from "@sorosan-sdk/react";
import { useEffect, useState } from "react";
import { ConnectWallet } from "./connect-wallet";
import { EstimateGas } from "./estimate-gas";
import { TokenInfo } from "./token-info";
import { DeployToken } from "./deploy-token";

interface PageProps extends
    React.HTMLAttributes<HTMLDivElement> {
}

export const Page = ({ }: PageProps) => {
    const { sdk } = useSorosanSDK();

    const [status, setStatus] = useState("");

    useEffect(() => {
        (async () => {
            const health = await sdk.server.getHealth();
            console.log(health);
            setStatus(health.status);
        })();
    }, []);

    return (
        <div>
            <div>
                Status: {status}
            </div>

            <ComponentSection title="Connect Wallet">
                <ConnectWallet />
            </ComponentSection>

            <ComponentSection title="Estimate Gas">
                <EstimateGas />
            </ComponentSection>

            <ComponentSection title="Token Info">
                <TokenInfo />
            </ComponentSection>

            <ComponentSection title="Deploy Smart Contract Token">
                <DeployToken />
            </ComponentSection>
        </div>
    )
}

interface ComponentSectionProps extends
    React.HTMLAttributes<HTMLDivElement> {
    title: string;
}
const ComponentSection = ({ title, children }: ComponentSectionProps) => {
    return (
        <section className="my-16">
            <div className="text-xl font-bold my-4">{title}</div>
            {children}
            <hr className="my-4" />
        </section>
    )
}