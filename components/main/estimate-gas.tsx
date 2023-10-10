"use client"

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useSorosanSDK } from '@sorosan-sdk/react';

interface EstimateGasProp
    extends React.InputHTMLAttributes<HTMLInputElement> { }

export const EstimateGas = ({ className, ...props }: EstimateGasProp) => {
    const { sdk } = useSorosanSDK();

    const [estimatedGas, setEstimatedGas] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleEstimateGas = async () => {
        setIsLoading(true);
        const contractHash = "730ad6613aebf5795dcdd27309b801cb7a48cb215ab9154f9577641148afd894";
        const contractAddress = await sdk.util.toContractAddress(contractHash);

        const args = [
            sdk.nativeToScVal("GCZIJ6IVR2GXZDRZUEXY72I6OC5MPYW4I2Q7CC332SNSE274SZFILR76", "address"),
            sdk.nativeToScVal(10000000, "i128"),
        ];
        const estimatedGas = await sdk.estimateGas(
            contractAddress,
            "mint",
            args
        )

        const gasBigNumber = sdk.toXLM(parseInt(estimatedGas));

        setEstimatedGas(gasBigNumber.toNumber().toString());
        setIsLoading(false);
    }

    return (
        <div className={cn("w-full", className)}>
            <Button onClick={handleEstimateGas} disabled={isLoading}>
                {isLoading ? "Estimating ..." : "Try it out"}
            </Button>

            <div className="my-4">
                <div>mint(&quot;GCZIJ6IVR2GXZDRZUEXY72I6OC5MPYW4I2Q7CC332SNSE274SZFILR76&quot;, 10000000)</div>
                <div className="text-xl font-bold">Estimated Gas: {estimatedGas} XLM</div>
            </div>
        </div>
    );
};
