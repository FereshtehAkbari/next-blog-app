import "@/styles/globals.css";
import Header from "@/components/Header";
import AuthProvider from "@/context/AuthContext";

export const metadata = {
  title: { template: " %s | بلاگ اپ", default: "بلاگ اپ" },

  description: "وب اپلیکیشن مدیریت بلاگ ها و نظرات کاربران",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="min-h-screen">
      <body>
        <AuthProvider>
          <Header />
          <div className="w-full m-auto p-[1rem] xl:max-w-screen-xl">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
