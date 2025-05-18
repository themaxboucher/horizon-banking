import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    $id: "user_123",
    email: "max.boucher@example.com",
    userId: "user_123",
    dwollaCustomerUrl: "https://api-sandbox.dwolla.com/customers/123",
    dwollaCustomerId: "123",
    firstName: "Max",
    lastName: "Boucher",
    address1: "123 Main St",
    city: "Montreal",
    state: "QC",
    postalCode: "H2Y 1C6",
    dateOfBirth: "1990-01-01",
    ssn: "123-45-6789",
  };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
