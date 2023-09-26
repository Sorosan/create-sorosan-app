"use client"

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useSorosanSDK } from '@sorosan-sdk/react'

interface DeployTokenProp
    extends React.InputHTMLAttributes<HTMLInputElement> { }

export const DeployToken = ({ className, }: DeployTokenProp) => {
    const { sdk } = useSorosanSDK();

    const [contractId, setContractId] = useState("");

    const [message, setMessage] = useState("Deploy Token");
    const [isLoading, setIsLoading] = useState(false);

    const handleEstimateGas = async () => {
        if (!await sdk.login()) {
            setMessage("Please connect wallet first");
        }
        setIsLoading(true);
        const contractId = await sdk.token.deploy();

        setContractId(contractId);
        setIsLoading(false);
    }

    return (
        <div className={cn("w-full", className)}>
            <Button onClick={handleEstimateGas} disabled={isLoading}>
                {isLoading ? "Deploying ..." : message}
            </Button>

            <div className="text-xl font-bold my-4">Contract Address: {sdk.util.toContractAddress(contractId)}</div>
        </div>
    );
};
