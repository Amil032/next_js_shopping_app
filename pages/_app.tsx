import type { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../src/store/store'
import ScrollToTop from "../src/utils/ScrollToTop"
import { Header } from "../src/components/Header/Header"
// import '../src/global_styles/style.scss'
export default function App({ Component, pageProps }: AppProps) {
    console.log('sdsdsd')
    return (
        <React.Fragment>
            <Provider store={store}>
                <Header>
                    {/* <ScrollToTop /> */}
                    <Component {...pageProps} />
                </Header>
            </Provider>


        </React.Fragment>
    )


}
