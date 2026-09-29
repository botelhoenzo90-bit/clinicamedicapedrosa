import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import coletaImage from "@/assets/coleta-domiciliar.png.asset.json";
import whatsappImage from "@/assets/whatsapp.png.asset.json";
import clinicImage from "@/assets/clinica-pedrosa.png.asset.json";
import pedrosaLogo from "@/assets/logo-pedrosa.png.asset.json";
import { Activity, ArrowRight, BadgeCheck, CalendarDays, CheckCircle2, ChevronDown, Dna, FlaskConical, HeartPulse, Home, Instagram, MapPin, MessageCircle, Microscope, Navigation, Phone, ShieldCheck, Star, Stethoscope, TestTube2, UserRound } from "lucide-react";

const SHARING_LOGO = "https://clinicamedicapedrosa.lovable.app/__l5e/assets-v1/7cc53e6e-b293-4cdc-a1b7-b0e1a32d2f3b/compartilhamento-pedrosa.png";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Pedrosa Labs | Clínica Médica e Laboratório" },
    { name: "description", content: "Exames laboratoriais, check-up, clínica médica e coleta domiciliar na Pedrosa Labs, em Âncora, Rio das Ostras." },
    { property: "og:title", content: "Pedrosa Labs | Clínica Médica e Laboratório" },
    { property: "og:description", content: "Cuidado e confiança para sua saúde." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://clinicamedicapedrosa.lovable.app/" },
    { property: "og:image", content: SHARING_LOGO },
    { property: "og:image:secure_url", content: SHARING_LOGO },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "Logomarca da Pedrosa Labs, Clínica e Laboratório" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: SHARING_LOGO }
  ]}),
  component: Index
});

const WHATSAPP = "https://wa.me/5522992778140?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20atendimento%20na%20Cl%C3%ADnica%20M%C3%A9dica%20Pedrosa.";
const MAP = "https://www.google.com/maps/search/?api=1&query=Av.%20das%20Flores%2C%201753%2C%20%C3%82ncora%2C%20Rio%20das%20Ostras%20-%20RJ";

type Item = readonly [typeof Activity, string, string];

const exams: Item[] = [
  [Activity, "Hemograma completo", "Avaliação das células do sangue e acompanhamento da saúde."],
  [FlaskConical, "Glicose", "Medição da glicose para acompanhamento metabólico."],
  [TestTube2, "Perfil lipídico", "Colesterol e triglicerídeos para acompanhamento cardiovascular."],
  [HeartPulse, "Hepatograma", "Avaliações laboratoriais relacionadas à função do fígado."],
  [ShieldCheck, "Creatinina e ureia", "Exames utilizados na avaliação da função renal."],
  [Dna, "Vitaminas D e B-12", "Dosagens de vitaminas importantes para o organismo."],
  [Microscope, "Ácido úrico", "Exame utilizado em diferentes avaliações metabólicas."],
  [Activity, "EAS e EPF", "Análises de urina e fezes conforme indicação."],
  [FlaskConical, "Beta HCG", "Exame laboratorial relacionado à identificação da gestação."]
];

const services: Item[] = [
  [Microscope, "Exames laboratoriais", "Coletas e análises com orientação para cada etapa."],
  [Home, "Coleta domiciliar", "Atendimento em casa para mais praticidade e conforto."],
  [Stethoscope, "Clínica médica", "Avaliação e acompanhamento da sua saúde."],
  [CalendarDays, "Check-up", "Avaliações de rotina conforme indicação profissional."]
];

const testimonials: [string, string][] = [
  ["Mariana Oliveira", "Atendimento atencioso e uma equipe que explica tudo com muita clareza."],
  ["Carlos Mendes", "Gostei muito da organização e da facilidade para realizar meus exames."],
  ["Juliana Martins", "A coleta domiciliar facilitou muito minha rotina e o atendimento foi cuidadoso."],
  ["Renato Almeida", "Um lugar onde você percebe cuidado desde a chegada. Profissionais muito atenciosos."],
  ["Fernanda Souza", "Fui muito bem recebido e tive orientação clara durante todo o atendimento."],
  ["Patrícia Lima", "A experiência foi tranquila e a equipe demonstrou muito cuidado."],
];

const faq = [
  ["Quais exames laboratoriais vocês realizam?", "A Pedrosa realiza diversos exames de análises clínicas. Entre os exames divulgados estão hemograma, glicose, perfil lipídico, hepatograma, creatinina, ureia, vitaminas, EAS, EPF, Beta HCG e outros. Para confirmar um exame específico, fale conosco."],
  ["Por que fazer exames de rotina mesmo quando estou me sentindo bem?", "Algumas alterações podem não provocar sintomas no início. Exames de rotina, quando indicados por um profissional de saúde, podem fazer parte do acompanhamento preventivo e ajudar na identificação de alterações que merecem atenção."],
  ["Vocês fazem coleta domiciliar?", "Sim. A coleta domiciliar oferece mais praticidade para pessoas com dificuldade de deslocamento ou que preferem realizar a coleta em casa. Consulte disponibilidade pelo WhatsApp."],
  ["Preciso estar em jejum?", "Depende do exame. Alguns não exigem jejum e outros possuem orientações específicas. Antes da coleta, confirme com a equipe o preparo necessário para o exame solicitado."],
  ["Vocês atendem convênios?", "A Pedrosa divulga atendimento para diferentes convênios e parceiros. A cobertura pode variar conforme o plano e o procedimento. Confirme seu plano antes do atendimento."],
  ["Qual é o horário de atendimento?", "O horário informado pela clínica é de segunda a sexta-feira, das 07h às 17h."],
  ["Onde fica a Pedrosa Labs?", "Estamos na Avenida das Flores, nº 1753, bairro Âncora, próximo à UPA, em Rio das Ostras - RJ."]
];

const partners = ["Unimed", "NotreDame Intermédica", "Amil", "GEAP Saúde", "Porto Seguro", "Bradesco Saúde", "CASSI"];

function Index() {
  const [open, setOpen] = useState<number | null>(1);

  return <main className="pedrosa-site">
    <section className="hero" id="inicio">
      <div className="container hero-inner">
        <div className="hero-copy">
          <img className="hero-logo" src={pedrosaLogo.url} alt="Pedrosa Labs — Clínica e Laboratório" />
          <h1>Sua saúde merece <span>atenção antes da preocupação.</span></h1>
          <p>Exames laboratoriais, check-up, clínica médica e coleta domiciliar em um só lugar. Um cuidado próximo para você acompanhar a sua saúde com mais informação, tranquilidade e segurança.</p>
          <div className="hero-actions"><a className="btn btn-primary btn-lg" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Agendar pelo WhatsApp <ArrowRight /></a><a className="btn btn-light btn-lg" href="#rotina">Entender a prevenção</a></div>
        </div>
      </div>
    </section>

    <section className="info-marquee" aria-label="Informações da clínica"><div className="info-track">{[1,2].flatMap(copy => ([
      [CheckCircle2, "Exames laboratoriais"],[Home, "Coleta domiciliar"],[Stethoscope, "Clínica médica"],[ShieldCheck, "Atendimento cuidadoso"],[CalendarDays, "Seg–Sex • 07h às 17h"]
    ] as [typeof Activity, string][]).map(([I,t]) => <span key={copy + t}><I /> {t}</span>))}</div></section>

    <section className="section services" id="servicos"><div className="container"><div className="section-head centered-head"><label>O QUE ENCONTRA NA PEDROSA</label><h2>Um só lugar para cuidar da saúde <span>com mais praticidade.</span></h2><p>Serviços pensados para diferentes momentos e necessidades.</p></div><div className="service-grid">{services.map(([I,t,d]) => <article className="service-card" key={t}><div className="service-icon"><I /></div><span className="card-kicker">PEDROSA</span><h3>{t}</h3><p>{d}</p></article>)}</div><div className="section-cta"><a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Agendar atendimento</a></div></div></section>

    <section className="section checkup-showcase"><div className="container checkup-inner"><div className="section-head centered-head checkup-heading"><label>CONDIÇÃO ESPECIAL DE CHECK-UP</label><h2>Cuide da sua saúde com uma avaliação <span>pensada para a sua rotina.</span></h2></div><div className="kit-card"><div className="kit-title">CHECK-UP PEDROSA</div><div className="kit-columns"><div><b>KIT KIDS</b><ul><li>Hemograma completo</li><li>Glicose</li><li>Lipidograma</li><li>Hepatograma</li><li>Ácido úrico</li><li>Vitamina D</li><li>Vitamina B-12</li><li>EAS, EPF</li></ul><strong>R$ 90,00</strong></div><div><b>KIT ADULTO</b><ul><li>Hemograma completo</li><li>Glicose</li><li>Lipidograma</li><li>Hepatograma</li><li>Creatinina</li><li>Ureia</li><li>Triglicerídeos</li><li>Ácido úrico</li><li>Vitamina D</li><li>Vitamina B-12</li></ul><strong>R$ 130,00</strong></div></div><small>Valores apresentados conforme material enviado pela clínica. Confirme disponibilidade, condições e preparo diretamente com a Pedrosa.</small></div><div className="checkup-copy"><p>Uma oportunidade para organizar seus exames de rotina e conversar com a equipe sobre o que faz sentido para você. O pacote não substitui avaliação médica e a indicação de exames deve considerar cada pessoa.</p><a className="btn btn-white" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Quero saber mais sobre o check-up</a></div></div></section>

    <section className="section exams" id="exames"><div className="container"><div className="section-head centered-head"><label>EXAMES LABORATORIAIS</label><h2>Informação para acompanhar <span>o que importa.</span></h2><p>Conheça alguns dos exames divulgados pela Pedrosa. A indicação e o preparo devem ser confirmados conforme cada caso.</p></div><div className="marquee"><div className="exam-track">{[...exams, ...exams].map(([I,t,d], i) => <article className="exam-card" key={t + i}><div className="exam-icon"><I /></div><h3>{t}</h3><p>{d}</p></article>)}</div></div><div className="section-cta"><a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Consultar exames e preparo</a></div></div></section>

    <section className="section collection"><div className="container collection-inner"><div className="section-head centered-head"><label>COLETA DOMICILIAR</label><h2>Mais conforto para fazer seu exame <span>onde você estiver.</span></h2><p>Para idosos, famílias, pessoas com dificuldade de deslocamento ou quem prefere mais praticidade, consulte a disponibilidade de coleta em casa.</p></div><div className="collection-image"><img src={coletaImage.url} alt="Profissional de saúde realizando coleta domiciliar em paciente" /></div><div className="collection-points"><article><Home /><h3>No conforto da sua casa</h3><p>Mais praticidade para sua rotina.</p></article><article><ShieldCheck /><h3>Atendimento cuidadoso</h3><p>Orientações antes da coleta.</p></article><article><CalendarDays /><h3>Agendamento simples</h3><p>Combine os detalhes pelo WhatsApp.</p></article></div><div className="section-cta"><a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Solicitar coleta domiciliar</a></div></div></section>

    <section className="section routine" id="rotina">
      <div className="container narrow-center">
        <div className="section-head centered-head"><label>PREVENÇÃO TAMBÉM É CUIDADO</label><h2>Você não precisa esperar um problema aparecer para <span>olhar para sua saúde.</span></h2><p>Sentir-se bem é ótimo. Mas algumas alterações podem evoluir sem sinais claros no começo. Por isso, avaliações de rotina, quando indicadas por um profissional, podem fazer parte do cuidado preventivo.</p></div>
        <div className="routine-grid">
          <article><span>01</span><div><h3>Acompanhar</h3><p>Observe indicadores importantes e mudanças ao longo do tempo.</p></div></article>
          <article><span>02</span><div><h3>Prevenir</h3><p>Tenha informações para conversar com seu médico sobre possíveis alterações.</p></div></article>
          <article><span>03</span><div><h3>Entender</h3><p>Resultados ajudam a construir decisões de saúde mais conscientes.</p></div></article>
          <article><span>04</span><div><h3>Cuidar</h3><p>Reserve um momento para acompanhar sua saúde de forma responsável.</p></div></article>
        </div>
        <div className="section-cta"><a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Falar sobre meu check-up</a></div>
      </div>
    </section>

    <section className="section process"><div className="container"><div className="section-head centered-head"><label>COMO FUNCIONA</label><h2>Do primeiro contato ao atendimento, <span>sem complicação.</span></h2><p>Um processo simples para você saber o que acontece em cada etapa.</p></div><div className="process-grid"><article><span>1</span><h3>Fale com a equipe</h3><p>Conte qual exame ou atendimento você procura.</p></article><article><span>2</span><h3>Receba as orientações</h3><p>Confirme preparo, horário e disponibilidade.</p></article><article><span>3</span><h3>Faça sua coleta</h3><p>Venha até a unidade ou consulte a coleta domiciliar.</p></article><article><span>4</span><h3>Acompanhe seu cuidado</h3><p>Com os resultados, siga as orientações do profissional.</p></article></div><div className="section-cta"><a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Agendar agora</a></div></div></section>

    <section className="section clinic-photo"><div className="container clinic-photo-inner"><div className="section-head centered-head"><label>CONHEÇA A PEDROSA</label><h2>Um ambiente pensado para receber você <span>com cuidado.</span></h2></div><div className="single-clinic-image"><img src={clinicImage.url} alt="Recepção da Pedrosa Labs e Clínica e Laboratório" /></div><div className="section-cta"><a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Agendar atendimento</a></div></div></section>

    <section className="section partners" id="convenios"><div className="container narrow-center"><div className="section-head centered-head"><label>CONVÊNIOS E PARCEIROS</label><h2>Confira alguns dos <span>convênios divulgados.</span></h2><p>A cobertura pode variar conforme o plano e o procedimento. Confirme antes do atendimento.</p></div><div className="partner-list">{partners.map(p => <div className="partner" key={p}><BadgeCheck /> <span>{p}</span></div>)}</div><div className="section-cta"><a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><Phone /> Confirmar meu convênio</a></div></div></section>

    <section className="section testimonials"><div className="container"><div className="section-head centered-head"><label>EXPERIÊNCIAS</label><h2>Quem é bem cuidado <span>percebe.</span></h2><p>Depoimentos demonstrativos para a apresentação do projeto. Substitua pelos depoimentos reais da clínica antes da publicação.</p></div><div className="marquee"><div className="testimonial-track">{[...testimonials, ...testimonials].map(([name,text], i) => <article className="testimonial" key={name + i}><div className="testimonial-top"><div className="avatar-placeholder"><UserRound /></div><div><strong>{name}</strong><small>Paciente Pedrosa</small></div></div><div className="stars">{[1,2,3,4,5].map(n => <Star key={n} fill="currentColor" />)}</div><p>“{text}”</p></article>)}</div></div><div className="section-cta"><a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Quero ser atendido</a></div></div></section>

    <section className="section location" id="localizacao"><div className="container location-inner"><div className="section-head centered-head"><label>LOCALIZAÇÃO E HORÁRIOS</label><h2>Estamos em <span>Âncora, Rio das Ostras.</span></h2><p>Av. das Flores, nº 1753, bairro Âncora, próximo à UPA.</p></div><div className="location-grid"><div className="contact-cards"><article><MapPin /><div><b>Endereço</b><span>Av. das Flores, 1753 • Âncora • Rio das Ostras - RJ</span></div></article><article><CalendarDays /><div><b>Horário</b><span>Segunda a sexta • 07h às 17h</span></div></article><article><Phone /><div><b>Telefones</b><span>(22) 99277-8140 • (22) 99256-2444</span></div></article></div><div className="map"><iframe title="Localização da Clínica Médica Pedrosa" src="https://www.google.com/maps?q=Avenida%20das%20Flores%201753%20%C3%82ncora%20Rio%20das%20Ostras%20RJ&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div><div className="section-cta"><a className="btn btn-primary" href={MAP} target="_blank" rel="noreferrer"><Navigation /> Abrir rota no Google Maps</a></div></div></section>

    <section className="section faq" id="faq"><div className="container narrow-center"><div className="section-head centered-head"><label>PERGUNTAS FREQUENTES</label><h2>Antes de vir, <span>tire suas dúvidas.</span></h2><p>Informações para ajudar você a se preparar melhor.</p></div><div className="faq-list">{faq.map(([q,a],i) => <div className={open===i ? "faq-item active" : "faq-item"} key={q}><button onClick={() => setOpen(open===i ? null : i)}><span>{q}</span><ChevronDown /></button>{open===i && <p>{a}</p>}</div>)}</div><div className="section-cta"><a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Tirar uma dúvida</a></div></div></section>

    <section className="final"><div className="container final-inner"><div><label>SEU PRÓXIMO PASSO</label><h2>Não deixe sua saúde para depois. <span>Converse com a Pedrosa.</span></h2><p>Agende seu atendimento, consulte um exame ou tire suas dúvidas pelo WhatsApp.</p></div><a className="btn btn-white btn-lg" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Agendar pelo WhatsApp <ArrowRight /></a></div></section>

    <footer className="footer"><div className="container footer-grid"><div><a href="#inicio" className="brand"><span className="brand-mark"><Dna /></span><span><strong>PEDROSA</strong><small>LABS • CLÍNICA MÉDICA</small></span></a><p>Laboratório de Análises Clínicas e Clínica Médica Pedrosa.</p></div><div><b>Atendimento</b><span>Segunda a sexta</span><span>07h às 17h</span></div><div><b>Contato</b><span>(22) 99277-8140</span><span>(22) 99256-2444</span><a href="https://instagram.com/laboratorio.pedrosa" target="_blank" rel="noreferrer"><Instagram /> Instagram</a></div><div><b>Endereço</b><span>Av. das Flores, 1753</span><span>Âncora • Rio das Ostras - RJ</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Pedrosa Labs. Todos os direitos reservados.</span><span>Informações do site não substituem orientação médica.</span></div></footer>
    <a className="floating-whatsapp" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp"><img src={whatsappImage.url} alt="" /></a>
  </main>;
}
