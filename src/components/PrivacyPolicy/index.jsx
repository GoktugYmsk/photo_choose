import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./index.scss";

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="privacy-policy"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="policy-container">
        <h1>Gizlilik Politikası</h1>
        <p className="last-updated">
          Son güncelleme: {new Date().toLocaleDateString()}
        </p>

        <section>
          <h2>1. Toplanan Bilgiler</h2>
          <p>Platformumuzda aşağıdaki kişisel bilgileri topluyoruz:</p>
          <ul>
            <li>Ad ve soyad</li>
            <li>E-posta adresi</li>
            <li>Profil fotoğrafı</li>
            <li>Yarışma katılımları ve fotoğraflar</li>
            <li>Kullanıcı tercihleri</li>
          </ul>
        </section>

        <section>
          <h2>2. Bilgilerin Kullanımı</h2>
          <p>Topladığımız bilgiler aşağıdaki amaçlarla kullanılmaktadır:</p>
          <ul>
            <li>Hesabınızın oluşturulması ve yönetilmesi</li>
            <li>Yarışmalara katılımınızın sağlanması</li>
            <li>Yarışma sonuçlarının değerlendirilmesi</li>
            <li>Platform içi iletişimin sağlanması</li>
            <li>Hizmet kalitesinin iyileştirilmesi</li>
          </ul>
        </section>

        <section>
          <h2>3. Bilgi Güvenliği</h2>
          <p>
            Kişisel verilerinizin güvenliği bizim için önemlidir. Verilerinizi
            korumak için:
          </p>
          <ul>
            <li>SSL şifreleme teknolojisi kullanıyoruz</li>
            <li>Düzenli güvenlik güncellemeleri yapıyoruz</li>
            <li>Veri erişimini sınırlı tutuyoruz</li>
            <li>Güvenlik ihlallerine karşı önlemler alıyoruz</li>
          </ul>
        </section>

        <section>
          <h2>4. Çerezler ve İzleme</h2>
          <p>
            Platform deneyimini iyileştirmek için çerezler kullanıyoruz.
            Çerezler:
          </p>
          <ul>
            <li>Oturum yönetimi</li>
            <li>Tercihlerinizin hatırlanması</li>
            <li>Platform kullanım analizi</li>
            <li>Güvenlik doğrulaması</li>
          </ul>
        </section>

        <section>
          <h2>5. Üçüncü Taraflarla Paylaşım</h2>
          <p>
            Kişisel verileriniz, aşağıdaki durumlar dışında üçüncü taraflarla
            paylaşılmaz:
          </p>
          <ul>
            <li>Yasal zorunluluklar</li>
            <li>Kullanıcı izni olması</li>
            <li>Platform hizmetlerinin sağlanması için gerekli olması</li>
          </ul>
        </section>

        <section>
          <h2>6. Kullanıcı Hakları</h2>
          <p>Kişisel verilerinizle ilgili aşağıdaki haklara sahipsiniz:</p>
          <ul>
            <li>Verilerinize erişim</li>
            <li>Verilerinizin düzeltilmesi</li>
            <li>Verilerinizin silinmesi</li>
            <li>Veri işlemeye itiraz</li>
            <li>Veri taşınabilirliği</li>
          </ul>
        </section>

        <section>
          <h2>7. İletişim</h2>
          <p>Gizlilik politikamızla ilgili sorularınız için:</p>
          <div className="contact-info">
            <p>E-posta: privacy@fotoyarisma.com</p>
            <p>Telefon: +90 (212) 555 0000</p>
            <p>Adres: Örnek Mahallesi, Fotoğraf Sokak No:1, İstanbul</p>
          </div>
        </section>

        <div className="policy-footer">
          <p>
            Bu gizlilik politikası, önceden bildirim yapılmaksızın
            güncellenebilir. Önemli değişiklikler olması durumunda
            kullanıcılarımız bilgilendirilecektir.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default PrivacyPolicy;
