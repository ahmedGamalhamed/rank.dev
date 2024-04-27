function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex min-h-screen min-w-full bg-background items-center justify-center'>
            {children}
        </div>
    )
}

export default Layout