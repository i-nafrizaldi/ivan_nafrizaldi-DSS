import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Faq = () => {
  return (
    <div className="container px-4">
      <Accordion
        type="single"
        collapsible
        className="w-full md:w-[900px] mx-auto flex flex-col gap-10"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="md:text-2xl text-left font-semibold">
            Apa syarat untuk menyewa motor?
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-lg text-left">
            Untuk menyewa motor, Anda perlu memenuhi syarat berikut: <br />
            - Usia minimal 18 tahun.
            <br />
            - Memiliki KTP yang masih berlaku.
            <br />
            - Memiliki SIM C yang aktif.
            <br />- Menyerahkan jaminan berupa KTP asli atau dokumen lainnya
            (bisa didiskusikan).
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="md:text-2xl text-left font-semibold">
            Bagaimana cara memesan motor?
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-lg text-left">
            Anda dapat memesan motor melalui langkah berikut:
            <br />
            - Pilih motor yang ingin disewa di halaman katalog kami.
            <br />
            - Tentukan tanggal dan durasi penyewaan.
            <br />
            - Isi formulir pemesanan dengan data Anda.
            <br />- Lakukan pembayaran sesuai metode yang tersedia.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="md:text-2xl text-left font-semibold">
            Bagaimana jika terjadi kerusakan atau kecelakaan?
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-lg text-left">
            Jika terjadi kerusakan atau kecelakaan:
            <br />
            - Penyewa wajib segera menghubungi pihak kami.
            <br />- Biaya perbaikan akan menjadi tanggung jawab penyewa sesuai
            ketentuan.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="md:text-2xl text-left font-semibold">
            Apakah bisa mengantarkan motor ke lokasi saya?
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-lg text-left">
            Ya, kami menyediakan layanan antar-jemput motor dengan biaya
            tambahan sesuai lokasi Anda. Silakan pilih opsi ini saat melakukan
            pemesanan.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="md:text-2xl text-left font-semibold">
            Apa yang harus dilakukan jika terjadi kendala pada motor?
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-lg text-left">
            Jika terjadi kendala, segera hubungi nomor layanan pelanggan kami.
            Kami akan memberikan bantuan atau mengganti motor jika diperlukan.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
