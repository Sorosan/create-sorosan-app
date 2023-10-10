"use client"

import { Page } from "@/components/main/page"
import { siteConfig } from "@/config/site"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl font-bold sm:text-5xl lg:text-7xl">
            Create Sorosan App
          </h1>
          <p className="max-w-[64rem] text-muted-foreground sm:text-xl">
            `create-sorosan-app` is your one-stop solution for effortlessly launching
            your web3 projects on Soroban. Whether you&#39;re a seasoned developer on Stellar
            or just starting out, Sorosan is powerful SDK that empowers you to
            kickstart your web applications with speed and precision.
          </p>
          <div className="space-x-4">
            <a className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" 
              href="#">
              Get Started
            </a>
            <a target="_blank" rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              href={siteConfig.links.github}>
              GitHub
            </a>
          </div>
        </div>
      </section>
      <Page />
    </section>
  )
}
