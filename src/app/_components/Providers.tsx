"use client"
import * as React from "react";
import { SessionProvider } from "next-auth/react"
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";

function Wrapper({children}: {children: React.ReactNode}) {
    return (
        <SessionProvider>
            <NextUIProvider>
                <NextThemesProvider attribute="class" defaultTheme={"dark"}>
                    {children}
                </NextThemesProvider>
            </NextUIProvider>
        </SessionProvider>
    );
}   

export default Wrapper;








// export default function App({
//   Component,
//   pageProps: { session, ...pageProps },
// }) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   )
// }