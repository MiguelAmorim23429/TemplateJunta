const CONFIG = {
  municipio:   "A sua Freguesia",
  sigla:       "JF",
  temaInicial: 0,

  contacto: {
    morada:    "Rua da Junta, 1\n0000-000 Freguesia",
    telefone:  "+351 200 000 000",
    email:     "geral@jf-exemplo.pt",
    copyright: "\u00a9 2026 Junta de Freguesia"
  },

  temas: [
    { nome:"Azul Institucional", p:"#1d4e89", s:"#15395f", a:"#c79a3e", t:"#1b2733", bl:"#f4f7fb", bs:"#e9eff6", ti:"#e7eef7" },
    { nome:"Verde Concelho",     p:"#2c6e49", s:"#1d4d33", a:"#bf8a2e", t:"#1d2a23", bl:"#f3f8f4", bs:"#e6f0e9", ti:"#e6f1ea" },
    { nome:"Bord\u00f4",              p:"#8a2433", s:"#5f1923", a:"#b78a3a", t:"#2a1d20", bl:"#faf4f5", bs:"#f1e3e5", ti:"#f3e6e8" },
    { nome:"Terracota",          p:"#b05231", s:"#7d3a23", a:"#4f6d5a", t:"#2c211c", bl:"#fbf5f2", bs:"#f3e6df", ti:"#f5e8e1" },
    { nome:"Azul-Marinho",       p:"#20324f", s:"#141f33", a:"#c2933f", t:"#1a212e", bl:"#f4f6f9", bs:"#e7ecf3", ti:"#e8ecf3" }
  ],

  stats: [
    { valor:47000, sufixo:"",   label:"Cidad\u00e3os",                barra:.92 },
    { valor:98,    sufixo:"%",  label:"Servi\u00e7os digitalizados", barra:.98 },
    { valor:24,    sufixo:"h",  label:"Balc\u00e3o Virtual",         barra:1   },
    { valor:12,    sufixo:"",   label:"Freguesias",             barra:.48 }
  ],

  avisos: [
    { tipo:"Urgente",  cor:"#dc2626", data:"23 jun 2026", titulo:"Condicionamento de tr\u00e2nsito na Rua Principal",        desc:"Obra de repara\u00e7\u00e3o da rede de saneamento entre os n.\u00ba\u2060s 10 e 48. Dura\u00e7\u00e3o prevista: 23 a 30 de junho." },
    { tipo:"P\u00fablico",  cor:"#2563eb", data:"18 jun 2026", titulo:"Consulta P\u00fablica \u2014 Revis\u00e3o do Regulamento da Freguesia", desc:"Dispon\u00edvel para consulta na sede da Junta e no portal at\u00e9 15 de julho de 2026." },
    { tipo:"Prazo",    cor:"#d97706", data:"15 jun 2026", titulo:"Taxas de Freguesia \u2014 Prazo para pagamento",              desc:"Os cidad\u00e3os t\u00eam at\u00e9 31 de julho para liquidar as taxas sem juros." },
    { tipo:"Info",     cor:"#059669", data:"10 jun 2026", titulo:"Novo programa de apoio social da freguesia",             desc:"Candidaturas abertas para o Programa de Apoio aos Cidad\u00e3os at\u00e9 30 de setembro." }
  ],

  servicos: [
    { icon:"building-2",             label:"Balc\u00e3o Virtual",         desc:"Servi\u00e7os online 24 horas" },
    { icon:"file-text",              label:"Taxas e IMI",            desc:"Pagamentos e 2.\u00aa via" },
    { icon:"hard-hat",               label:"Licenciamento",          desc:"Obras e urbanismo" },
    { icon:"message-square-warning", label:"Reclama\u00e7\u00f5es",            desc:"Sugest\u00f5es e ocorr\u00eancias" },
    { icon:"calendar-days",          label:"Agenda Cultural",        desc:"Eventos do concelho" },
    { icon:"map",                    label:"Mapa Interativo",        desc:"Conhecer o munic\u00edpio" },
    { icon:"briefcase",              label:"Emprego",                desc:"Concursos e oportunidades" },
    { icon:"heart-handshake",        label:"Apoios Sociais",         desc:"Programas de apoio" }
  ],

  noticias: [
    { tag:"Ambiente",   data:"10 jun 2026", icon:"recycle",        img:"https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=400&fit=crop&q=80", titulo:"Recolha de res\u00edduos porta-a-porta alarga-se a tr\u00eas novas freguesias",  excerto:"A medida pretende aumentar a taxa de reciclagem e reduzir os contentores na via p\u00fablica." },
    { tag:"Educa\u00e7\u00e3o",   data:"06 jun 2026", icon:"graduation-cap", img:"https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&h=400&fit=crop&q=80", titulo:"Inscri\u00e7\u00f5es abertas para os ateli\u00eas municipais de ver\u00e3o",               excerto:"Atividades para crian\u00e7as dos 6 aos 12 anos, com transporte e almo\u00e7o inclu\u00eddos." },
    { tag:"Mobilidade", data:"03 jun 2026", icon:"bus",            img:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=400&fit=crop&q=80", titulo:"Nova linha de transporte p\u00fablico serve a zona industrial",               excerto:"O refor\u00e7o da rede facilita as desloca\u00e7\u00f5es entre casa e trabalho sem uso de autom\u00f3vel." },
    { tag:"Obras",      data:"29 mai 2026", icon:"construction",   img:"https://images.unsplash.com/photo-1563906267088-b029e7101114?w=800&h=400&fit=crop&q=80", titulo:"Conclu\u00edda a repavimenta\u00e7\u00e3o e requalifica\u00e7\u00e3o da Rua do Com\u00e9rcio",       excerto:"Os trabalhos melhoram a seguran\u00e7a rodovi\u00e1ria e a circula\u00e7\u00e3o pedonal." }
  ],

  eventos: [
    { dia:"28", mes:"JUN", titulo:"Sess\u00e3o P\u00fablica da Assembleia de Freguesia", local:"Sede da Junta de Freguesia", hora:"21h00" },
    { dia:"05", mes:"JUL", titulo:"Feira de Produtos Locais e Artesanato",   local:"Pra\u00e7a do Munic\u00edpio",                hora:"09h00 \u2013 18h00" },
    { dia:"12", mes:"JUL", titulo:"Caminhada Solid\u00e1ria pela Inclus\u00e3o",       local:"Parque Verde do Rio",               hora:"09h30" },
    { dia:"04", mes:"AGO", titulo:"Abertura oficial das Festas do Concelho", local:"Avenida da Liberdade",              hora:"21h30" }
  ],

  transparencia: [
    { icon:"vote",         titulo:"Or\u00e7amento Participativo", desc:"Decida connosco a aplica\u00e7\u00e3o de parte do or\u00e7amento da freguesia." },
    { icon:"file-check-2", titulo:"Contratos P\u00fablicos",      desc:"Consulte os procedimentos e adjudica\u00e7\u00f5es da autarquia." },
    { icon:"database",     titulo:"Dados Abertos",           desc:"Aceda livremente aos dados p\u00fablicos do munic\u00edpio." }
  ],

  faqs: [
    { q:"Qual \u00e9 o hor\u00e1rio de atendimento da Junta?",          r:"Os servi\u00e7os est\u00e3o abertos de segunda a sexta-feira, das 9h00 \u00e0s 16h30. O Balc\u00e3o Virtual est\u00e1 dispon\u00edvel 24 horas por dia, todos os dias." },
    { q:"Como obtenho a 2.\u00aa via de uma fatura da \u00e1gua?",     r:"Aceda ao Balc\u00e3o Virtual com os seus dados de cidad\u00e3o, selecione '\u00c1gua e Saneamento' e descarregue a 2.\u00aa via em PDF de imediato." },
    { q:"Posso pagar taxas online?",                         r:"Sim. Na \u00e1rea de Taxas pode consultar os valores e efetuar o pagamento por Multibanco, MB WAY ou refer\u00eancia banc\u00e1ria." },
    { q:"Como marco um atendimento presencial?",             r:"Utilize o servi\u00e7o 'Agendamentos' na \u00c1rea do Cidad\u00e3o para escolher dia e hora, evitando tempos de espera nos servi\u00e7os." },
    { q:"Onde posso consultar as atas da Junta de Freguesia?", r:"Todas as atas e delibera\u00e7\u00f5es est\u00e3o dispon\u00edveis na sec\u00e7\u00e3o de Transpar\u00eancia deste portal, em conformidade com a lei de acesso \u00e0 informa\u00e7\u00e3o administrativa." }
  ]
};

export default CONFIG;
