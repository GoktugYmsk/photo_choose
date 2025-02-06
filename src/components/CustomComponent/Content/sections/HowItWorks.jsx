import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      icon: "📸",
      title: "Fotoğraf Yükle",
      description: "En iyi fotoğrafınızı seçin ve yarışmaya katılın",
    },
    {
      icon: "🤖",
      title: "AI Değerlendirme",
      description: "Fotoğrafınız yapay zeka tarafından değerlendirilir",
    },
    {
      icon: "🏆",
      title: "Ödül Kazanın",
      description: "Kazananlar değerli ödüllerin sahibi olur",
    },
  ];

  return (
    <section className="how-it-works">
      <h2>Nasıl Çalışır?</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
