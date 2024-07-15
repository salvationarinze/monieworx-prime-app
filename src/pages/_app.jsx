import {useState, useEffect} from "react";

import {ReactNotifications} from "react-notifications-component";
import {QueryClient, QueryClientProvider, Hydrate} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";

import AOS from "aos";
import "aos/dist/aos.css";
import "react-responsive-modal/styles.css";
import "react-loading-skeleton/dist/skeleton.css";
import "@/styles/globals.scss";

export default function MyApp({Component, pageProps}) {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      })
  );

  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    AOS.init();
    setPageLoaded(true);
  }, []);

  if (!pageLoaded) return null;

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
    >
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ReactNotifications />
          {getLayout(<Component {...pageProps} />)}
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </GoogleReCaptchaProvider>
  );
}
