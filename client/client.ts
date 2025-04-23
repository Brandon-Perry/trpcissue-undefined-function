import { createTRPCClient, httpBatchLink } from "@trpc/client";
import {TestRouter} from '../server/src/router'


export const client = createTRPCClient<TestRouter>({
    links: [
        httpBatchLink({
            url: 'http://localhost:3000/trpc',
            // You can pass any HTTP headers you wish here
            async headers() {
              return {
                
              };
            },
          }),
    ],
  });

console.log('client', client)

