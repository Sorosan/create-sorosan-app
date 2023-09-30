"use client"

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useSorosanSDK } from '@sorosan-sdk/react';

interface TokenInfoProp
    extends React.InputHTMLAttributes<HTMLInputElement> { }

export const TokenInfo = ({ className, ...props }: TokenInfoProp) => {
    const { sdk } = useSorosanSDK();

    const tokenContractAddress = "CBZQVVTBHLV7K6K5ZXJHGCNYAHFXUSGLEFNLSFKPSV3WIEKIV7MJJQWP";

    const [tokenName, setTokenName] = useState("");
    const [tokenSymbol, setTokenSymbol] = useState("");
    const [tokenDecimal, setTokenDecimal] = useState(0);

    const [isLoading, setIsLoading] = useState(false);

    const handleTokenInfo = async () => {
        setIsLoading(true);
        setTokenName("");
        setTokenSymbol("");
        setTokenDecimal(0);

        const name = await sdk.token.name(tokenContractAddress);
        const symbol = await sdk.token.symbol(tokenContractAddress);
        const decimal = await sdk.token.decimal(tokenContractAddress);
        // const balance = await sdk.token.balance(tokenContractAddress);

        setTokenName(name);
        setTokenSymbol(symbol);
        setTokenDecimal(decimal);
        setIsLoading(false);
    }

    return (
        <div className={cn("w-full", className)}>
            <Button disabled={isLoading}
                onClick={handleTokenInfo}>
                {isLoading ? "Getting Info ..." : "Try it out"}
            </Button>
            <div className="my-4">
                <div>Contract: {tokenContractAddress}</div>
                <div className="text-xl font-bold">Token Name: {tokenName}</div>
                <div className="text-xl font-bold">Token Symbol: {tokenSymbol}</div>
                <div className="text-xl font-bold">Token Decimal: {tokenDecimal}</div>
            </div>
        </div>
    );
};
