import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Activity, ArrowRight, BadgeCheck, CalendarDays, CheckCircle2, ChevronDown, Dna, FlaskConical, HeartPulse, Home, Instagram, MapPin, Menu, MessageCircle, Microscope, Navigation, Phone, ShieldCheck, Star, Stethoscope, TestTube2, X } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Pedrosa Labs | Clínica Médica e Laboratório em Âncora" },
    { name: "description", content: "Exames laboratoriais, clínica médica e coleta domiciliar na Pedrosa Labs, em Âncora, Rio das Ostras. Atendimento de segunda a sexta, das 07h às 17h." },
    { property: "og:title", content: "Pedrosa Labs | Clínica Médica e Laboratório" },
    { property: "og:description", content: "Cuidado e confiança para sua saúde. Exames, check-up, clínica médica e coleta domiciliar." },
    { property: "og:type", content: "website" }
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
  [Home, "Coleta domiciliar", "Mais conforto para quem prefere realizar a coleta em casa."],
  [Stethoscope, "Clínica médica", "Avaliação e acompanhamento da sua saúde."],
  [CalendarDays, "Check-up", "Uma visão mais completa da sua saúde e prevenção."]
];

const team = [
  ["https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=90", "Equipe médica", "Avaliação e acompanhamento"],
  ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=90", "Equipe de laboratório", "Análises clínicas"],
  ["https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=90", "Atendimento Pedrosa", "Acolhimento e orientação"]
];

const testimonials = [
  "Atendimento atencioso e uma equipe que explica tudo com muita clareza.",
  "Gostei muito da organização e da facilidade para realizar meus exames.",
  "A coleta domiciliar facilitou muito minha rotina e o atendimento foi cuidadoso.",
  "Um lugar onde você percebe cuidado desde a chegada. Profissionais muito atenciosos."
];

const faq = [
  ["Quais exames laboratoriais vocês realizam?", "A Pedrosa realiza diversos exames de análises clínicas. Entre os exames divulgados estão hemograma, glicose, perfil lipídico, hepatograma, creatinina, ureia, vitaminas, EAS, EPF, Beta HCG e outros. Para confirmar um exame específico, fale conosco."],
  ["Preciso fazer exames de rotina mesmo quando estou me sentindo bem?", "Os exames de rotina fazem parte do acompanhamento preventivo e podem ajudar o profissional de saúde a identificar alterações que nem sempre provocam sintomas. A necessidade e a periodicidade dependem da idade, histórico, condições de saúde e orientação do seu médico."],
  ["Vocês fazem coleta domiciliar?", "Sim. A coleta domiciliar oferece mais praticidade para pessoas que têm dificuldade de deslocamento ou preferem realizar a coleta no conforto de casa. Consulte disponibilidade e condições pelo WhatsApp."],
  ["Preciso estar em jejum?", "Depende do exame. Alguns exames não exigem jejum e outros podem ter orientações específicas. Antes da coleta, confirme com a equipe o preparo necessário para o exame solicitado."],
  ["Vocês atendem convênios?", "A Pedrosa divulga atendimento para diferentes convênios e parceiros. A cobertura pode variar conforme o plano, procedimento e condições contratadas. Confirme seu plano antes do atendimento."],
  ["Qual é o horário de atendimento?", "O horário informado pela clínica é de segunda a sexta-feira, das 07h às 17h."],
  ["Onde fica a Pedrosa Labs?", "Estamos na Avenida das Flores, nº 1753, bairro Âncora, próximo à UPA, em Rio das Ostras - RJ."]
];

const partners = ["Unimed", "NotreDame Intermédica", "Amil", "GEAP Saúde", "Porto Seguro", "Bradesco Saúde", "CASSI"];

function Index() {
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState<number | null>(1);

  return <main className="pedrosa-site">
    <header className="topbar">
      <div className="container nav-wrap">
        <a href="#inicio" className="brand"><span className="brand-mark"><Dna /></span><span><strong>PEDROSA</strong><small>LABS • CLÍNICA MÉDICA</small></span></a>
        <nav className={menu ? "main-nav open" : "main-nav"}>
          <a href="#exames" onClick={() => setMenu(false)}>Exames</a><a href="#rotina" onClick={() => setMenu(false)}>Prevenção</a><a href="#servicos" onClick={() => setMenu(false)}>Serviços</a><a href="#equipe" onClick={() => setMenu(false)}>Equipe</a><a href="#convenios" onClick={() => setMenu(false)}>Convênios</a><a href="#faq" onClick={() => setMenu(false)}>Dúvidas</a>
        </nav>
        <a className="nav-cta" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Agendar</a>
        <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Abrir menu">{menu ? <X /> : <Menu />}</button>
      </div>
    </header>

    <section className="hero" id="inicio">
      <div className="hero-orb one" /><div className="hero-orb two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><i /> LABORATÓRIO • CLÍNICA MÉDICA • ÂNCORA</div>
          <h1>Cuide da sua saúde antes que <span>ela peça atenção.</span></h1>
          <p>Exames laboratoriais, check-up, clínica médica e coleta domiciliar em um só lugar. Cuidado próximo, informação clara e uma equipe preparada para receber você.</p>
          <div className="hero-actions"><a className="btn btn-primary btn-lg" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Agendar pelo WhatsApp <ArrowRight /></a><a className="btn btn-light btn-lg" href="#rotina">Por que fazer exames?</a></div>
          <div className="hero-trust"><span><BadgeCheck /> Atendimento humanizado</span><span><ShieldCheck /> Segurança e cuidado</span><span><Home /> Coleta domiciliar</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-main-img"><img src="https://images.unsplash.com/photo-1579154204601-01588f351d1d?auto=format&fit=crop&w=1200&q=90" alt="Profissional em laboratório" /></div>
          <div className="hero-small-img"><img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=90" alt="Profissional de saúde" /></div>
          <div className="hero-stat"><FlaskConical /><span><b>Seu cuidado começa aqui</b><small>Exames e acompanhamento</small></span></div>
          <div className="hero-brand-card"><Dna /><span><b>PEDROSA</b><small>LABS</small></span></div>
        </div>
      </div>
    </section>

    <div className="info-strip"><div className="container strip-track"><span><CheckCircle2 /> Exames laboratoriais</span><span><Home /> Coleta domiciliar</span><span><Stethoscope /> Clínica médica</span><span><ShieldCheck /> Atendimento cuidadoso</span><span><CalendarDays /> Seg–Sex • 07h às 17h</span></div></div>

    <section className="section routine" id="rotina">
      <div className="container routine-grid">
        <div className="routine-copy"><label>PREVENÇÃO TAMBÉM É CUIDADO</label><h2>Você não precisa esperar sentir algo para <span>olhar para a sua saúde.</span></h2><p>Muitas alterações podem surgir sem sinais claros no começo. Exames de rotina, quando indicados pelo profissional de saúde, ajudam a acompanhar indicadores importantes e podem fazer parte de uma estratégia de prevenção.</p><p className="routine-emphasis">O objetivo não é fazer exames sem necessidade. É entender, junto ao seu profissional de saúde, quais avaliações fazem sentido para você.</p><a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Falar sobre meu check-up</a></div>
        <div className="routine-cards">
          <article><span>01</span><div><b>Acompanhe</b><p>Observe indicadores importantes ao longo do tempo.</p></div></article>
          <article><span>02</span><div><b>Previna</b><p>Identifique possíveis alterações para conversar com seu médico.</p></div></article>
          <article><span>03</span><div><b>Tenha informação</b><p>Resultados ajudam a construir decisões de saúde mais conscientes.</p></div></article>
          <article><span>04</span><div><b>Cuide de você</b><p>Prevenção também é reservar tempo para acompanhar sua saúde.</p></div></article>
        </div>
      </div>
    </section>

    <section className="section services" id="servicos"><div className="container"><div className="section-head centered-head"><label>O QUE ENCONTRA NA PEDROSA</label><h2>Um lugar para cuidar da saúde <span>de forma mais completa.</span></h2><p>Serviços pensados para diferentes necessidades, com orientação e atendimento próximo.</p></div><div className="service-grid">{services.map(([I,t,d]) => <article className="service-card" key={t}><div className="service-icon"><I /></div><span className="card-kicker">PEDROSA</span><h3>{t}</h3><p>{d}</p><a href={WHATSAPP} target="_blank" rel="noreferrer">Agendar atendimento <ArrowRight /></a></article>)}</div><div className="section-cta"><a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Quero agendar</a></div></div></section>

    <section className="section exams" id="exames"><div className="container"><div className="section-head centered-head"><label>EXAMES LABORATORIAIS</label><h2>Da rotina ao acompanhamento, <span>informação para cuidar.</span></h2><p>Entre os exames divulgados pela Pedrosa estão as opções abaixo. A indicação, o preparo e a necessidade de cada exame devem ser orientados conforme cada caso.</p></div><div className="marquee"><div className="exam-track">{[...exams, ...exams].map(([I,t,d], i) => <article className="exam-card" key={t + i}><div className="exam-icon"><I /></div><h3>{t}</h3><p>{d}</p><a href={WHATSAPP} target="_blank" rel="noreferrer">Consultar <ArrowRight /></a></article>)}</div></div><div className="section-cta"><a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Consultar exames e preparo</a></div></div></section>

    <section className="section checkup-showcase"><div className="container showcase-grid"><div className="showcase-visual"><div className="showcase-glow" /><div className="kit-card"><div className="kit-title">NOSSA TORCIDA É PELA <strong>SUA SAÚDE.</strong></div><div className="kit-columns"><div><b>KIT KIDS</b><ul><li>Hemograma completo</li><li>Glicose</li><li>Lipidograma</li><li>Hepatograma</li><li>Ácido úrico</li><li>Vitamina D</li><li>Vitamina B-12</li><li>EAS, EPF</li></ul></div><div><b>KIT ADULTO</b><ul><li>Hemograma completo</li><li>Glicose</li><li>Lipidograma</li><li>Hepatograma</li><li>Creatinina</li><li>Ureia</li><li>Triglicerídeos</li><li>Ácido úrico</li><li>Vitamina D</li><li>Vitamina B-12</li></ul></div></div><small>Condições e valores devem ser confirmados diretamente com a Pedrosa.</small></div></div><div className="showcase-copy"><label>CHECK-UP</label><h2>Uma forma simples de começar a <span>olhar para a sua saúde.</span></h2><p>Na imagem enviada pela clínica, a Pedrosa apresenta opções de check-up com exames para adultos e crianças. A proposta pode facilitar a organização de avaliações de rotina.</p><div className="check-points"><span><CheckCircle2 /> Conheça os exames incluídos antes de agendar</span><span><CheckCircle2 /> Confirme preparo e orientações com a equipe</span><span><CheckCircle2 /> Converse com seu médico sobre quais exames são adequados</span></div><a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Quero saber sobre o check-up</a></div></div></section>

    <section className="section collection"><div className="container collection-grid"><div className="collection-photo"><img src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1100&q=90" alt="Atendimento de saúde em casa" /><div className="collection-tag"><Home /><strong>Coleta domiciliar</strong><small>Mais conforto para sua rotina</small></div></div><div className="collection-copy"><label>COLETA DOMICILIAR</label><h2>Seu exame sem precisar <span>sair de casa.</span></h2><p>Para quem tem dificuldade de deslocamento, rotina apertada ou simplesmente prefere mais conforto, a coleta domiciliar pode tornar o cuidado mais acessível.</p><div className="benefit-list"><span><CheckCircle2 /> Atendimento no conforto da sua casa</span><span><CheckCircle2 /> Praticidade para idosos e famílias</span><span><CheckCircle2 /> Agendamento pelo WhatsApp</span><span><CheckCircle2 /> Orientações antes da coleta</span></div><a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Solicitar coleta domiciliar</a></div></div></section>

    <section className="section process"><div className="container"><div className="section-head centered-head"><label>COMO FUNCIONA</label><h2>Do primeiro contato ao atendimento, <span>sem complicação.</span></h2><p>Um processo simples para você saber o que fazer em cada etapa.</p></div><div className="process-grid"><article className="process-card"><div className="process-number">1</div><div className="process-line"/><h3>Fale com a equipe</h3><p>Conte qual exame ou atendimento você procura pelo WhatsApp.</p></article><article className="process-card"><div className="process-number">2</div><div className="process-line"/><h3>Receba as orientações</h3><p>Confirme preparo, horário, disponibilidade e documentação necessária.</p></article><article className="process-card"><div className="process-number">3</div><div className="process-line"/><h3>Faça sua coleta</h3><p>Venha até a unidade ou consulte a disponibilidade de coleta domiciliar.</p></article><article className="process-card"><div className="process-number">4</div><div className="process-line"/><h3>Acompanhe seu cuidado</h3><p>Com os resultados em mãos, siga as orientações do seu profissional de saúde.</p></article></div><div className="section-cta"><a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Agendar agora</a></div></div></section>

    <section className="section gallery"><div className="container"><div className="section-head centered-head"><label>AMBIENTE E CUIDADO</label><h2>Um atendimento que começa <span>na forma como recebemos você.</span></h2></div><div className="gallery-grid"><img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1100&q=90" alt="Ambiente de saúde" /><img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=90" alt="Ambiente clínico" /><img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=90" alt="Estrutura de saúde" /><img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=90" alt="Profissional de saúde" /></div><div className="section-cta"><a className="btn btn-dark" href={WHATSAPP} target="_blank" rel="noreferrer">Agendar atendimento <ArrowRight /></a></div></div></section>

    <section className="section team" id="equipe"><div className="container"><div className="section-head centered-head"><label>NOSSA EQUIPE</label><h2>Pessoas que cuidam <span>de pessoas.</span></h2><p>Uma apresentação visual para destacar a equipe da clínica. As fotos podem ser substituídas pelas imagens reais dos profissionais.</p></div><div className="team-grid">{team.map(([img,t,d]) => <article className="team-card" key={t}><img src={img} alt={t} /><div><h3>{t}</h3><p>{d}</p><span><BadgeCheck /> Atendimento humanizado</span></div></article>)}</div><div className="section-cta"><a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Agendar atendimento</a></div></div></section>

    <section className="section partners" id="convenios"><div className="container"><div className="section-head centered-head"><label>CONVÊNIOS E PARCEIROS</label><h2>Mais facilidade para cuidar <span>da sua saúde.</span></h2><p>Carrossel preparado para apresentar os convênios e parceiros atendidos. Confirme a cobertura do seu plano antes do atendimento.</p></div><div className="partner-marquee"><div className="partner-track">{[...partners, ...partners].map((p,i) => <div className="partner" key={p+i}><Dna /> {p}</div>)}</div></div><div className="section-cta"><a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><Phone /> Confirmar meu convênio</a></div></div></section>

    <section className="section testimonials"><div className="container"><div className="section-head centered-head"><label>EXPERIÊNCIA DE QUEM CONFIA</label><h2>Confiança também faz parte <span>do cuidado.</span></h2><p>Depoimentos demonstrativos na estrutura. Podemos substituir pelos depoimentos reais da clínica.</p></div><div className="marquee"><div className="testimonial-track">{[...testimonials, ...testimonials].map((t,i) => <article className="testimonial" key={i}><div className="stars">{[1,2,3,4,5].map(n => <Star key={n} fill="currentColor" />)}</div><p>“{t}”</p><strong>Paciente Pedrosa</strong><small>Experiência com a clínica</small></article>)}</div></div><div className="section-cta"><a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Quero ser atendido</a></div></div></section>

    <section className="section location" id="localizacao"><div className="container location-grid"><div className="location-copy"><label>LOCALIZAÇÃO E HORÁRIOS</label><h2>Estamos perto de você, em <span>Âncora.</span></h2><p>Av. das Flores, nº 1753, bairro Âncora, próximo à UPA, Rio das Ostras - RJ.</p><div className="contact-card"><MapPin /><span><strong>Endereço</strong><small>Av. das Flores, 1753 • Âncora • Rio das Ostras - RJ</small></span></div><div className="contact-card"><CalendarDays /><span><strong>Horário de atendimento</strong><small>Segunda a sexta • 07h às 17h</small></span></div><div className="contact-card"><Phone /><span><strong>Telefones</strong><small>(22) 99277-8140 • (22) 99256-2444</small></span></div><div className="location-actions"><a className="btn btn-primary" href={MAP} target="_blank" rel="noreferrer"><Navigation /> Abrir rota</a><a className="btn btn-outline" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Falar no WhatsApp</a></div></div><div className="map"><iframe title="Localização da Clínica Médica Pedrosa" src="https://www.google.com/maps?q=Avenida%20das%20Flores%201753%20%C3%82ncora%20Rio%20das%20Ostras%20RJ&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div></section>

    <section className="section faq" id="faq"><div className="container faq-grid"><div className="faq-intro"><label>PERGUNTAS FREQUENTES</label><h2>Antes de vir, <span>tire suas dúvidas.</span></h2><p>Reunimos as perguntas que mais ajudam quem está se preparando para um exame ou atendimento.</p><a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Tirar uma dúvida</a></div><div className="faq-list">{faq.map(([q,a],i) => <div className={open===i ? "faq-item active" : "faq-item"} key={q}><button onClick={() => setOpen(open===i ? null : i)}><span>{q}</span><ChevronDown /></button>{open===i && <p>{a}</p>}</div>)}</div></div></section>

    <section className="final"><div className="container final-inner"><div><label>SEU PRÓXIMO PASSO</label><h2>Não deixe sua saúde para depois. <span>Converse com a Pedrosa.</span></h2><p>Agende seu atendimento, consulte um exame ou tire suas dúvidas diretamente pelo WhatsApp.</p></div><a className="btn btn-white btn-lg" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Agendar pelo WhatsApp <ArrowRight /></a></div></section>

    <footer className="footer"><div className="container footer-grid"><div><a href="#inicio" className="brand"><span className="brand-mark"><Dna /></span><span><strong>PEDROSA</strong><small>LABS • CLÍNICA MÉDICA</small></span></a><p>Laboratório de Análises Clínicas e Clínica Médica Pedrosa.</p><p>Cuidado e confiança para sua saúde.</p></div><div><b>Atendimento</b><span>Segunda a sexta</span><span>07h às 17h</span><a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a></div><div><b>Contato</b><span>(22) 99277-8140</span><span>(22) 99256-2444</span><a href="https://instagram.com/laboratorio.pedrosa" target="_blank" rel="noreferrer"><Instagram /> Instagram</a></div><div><b>Endereço</b><span>Av. das Flores, 1753</span><span>Âncora • Rio das Ostras - RJ</span><a href={MAP} target="_blank" rel="noreferrer"><MapPin /> Ver localização</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Pedrosa Labs. Todos os direitos reservados.</span><span>Informações do site não substituem orientação médica.</span></div></footer>
    <a className="floating-whatsapp" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle /></a>
  </main>;
}
