import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { Sidebar } from "@/components/Sidebar";
import "../app/styles.css";

export const metadata: Metadata = {
  title: "pixNow - ValePay",
  description: "Best payment method for your Brazilian customers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <div style={{ backgroundColor: "#16181D", height: "100vh" }}>
            <Sidebar />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
