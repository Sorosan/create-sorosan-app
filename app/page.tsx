import { Page } from "@/components/main/page"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-7xl font-bold">
            Create Sorosan App
          </h1>
          <p className="max-w-[64rem] text-muted-foreground sm:text-xl">
            `create-sorosan-app` is your one-stop solution for effortlessly launching
            your web3 projects on Soroban. Whether you're a seasoned developer on Stellar
            or just starting out, Sorosan is powerful SDK that empowers you to
            kickstart your web applications with speed and precision.
          </p>
          <div className="space-x-4">
            <a className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md" href="/login">
              Get Started
            </a>
            <a target="_blank" rel="noreferrer" className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-11 px-8 rounded-md" href="https://github.com/shadcn/taxonomy">
              GitHub
            </a>
          </div>
        </div>
      </section>
      <Page />
    </section>
  )
}
