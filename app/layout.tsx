
export const metadata = {
  title: "888 Poker Club",
  description: "Private ClubGG poker games",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}