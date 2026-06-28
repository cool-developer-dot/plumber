import SiteHeader from "@/components/SiteHeader";

export default function AreasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}
