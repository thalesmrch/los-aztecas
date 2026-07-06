/* ════════════════════════════════════════════════════════════════════
   CONTEÚDO DO DOSSIÊ — ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR
   ────────────────────────────────────────────────────────────────────
   • Textos: escreva direto entre as aspas.
   • Imagens: coloque os arquivos em assets/img/ e aponte o caminho
     (ex.: "assets/img/territorio-1.jpg"). Enquanto for null, a página
     mostra um quadro de placeholder no lugar.
   • Tudo que terminar em _AQUI (e "NOME DO PERSONAGEM" / "ID 000")
     aparece DESTACADO EM LARANJA na página até você trocar — não tem
     como esquecer um placeholder no ar.
   ════════════════════════════════════════════════════════════════════ */

const CONTENT = {

  meta: {
    cidade: "CIDADE DOS ANJOS",
    data: "JULHO · 2026",
  },

  // faixas em movimento (decorativas). O texto se repete sozinho pra preencher
  // a tela sem buracos; o "◆" separa as palavras.
  marquees: [
    "LOS AZTECAS ◆ EL BARRIO ES PRIMERO ◆ CIDADE DOS ANJOS ◆ ",
    "SANGUE ◆ FAMILIA ◆ BARRIO ◆ LEALDADE ◆ RESPEITO ◆ ",
  ],

  /* ─────────── 01 · HISTÓRIA / LORE ─────────── */
  lore: [
    "A primeira geração dos Aztecas cresceu num bairro mexicano onde a herança de família era o sobrenome e mais nada. Quem atravessou a fronteira trouxe pouco: orgulho, o retrato da avó e a certeza de que família é quem divide o asfalto com você, não quem tem o mesmo sangue.",
    "Na Cidade dos Anjos, a gente chega como familia de bairro. Lowrider na garagem, flanela abotoada no colarinho, grafite marcando o muro da quadra. Caos não é o plano. O plano é um território com rosto, onde conflito tem motivo e palavra dada vale mais que contrato.",
    "Queremos contar uma história longa dentro da cidade, começando por baixo. Se um dia houver guerra, ela terá sido construída em semanas de RP, com um motivo que todo mundo viu nascer.",
  ],

  /* ─────────── 02 · IDENTIDADE ─────────── */
  // paleta oficial da facção (predominante primeiro)
  paleta: [
    { nome: "LARANJA", hex: "#FF6A00", papel: "PREDOMINANTE" },
    { nome: "BRANCO", hex: "#F0E9DC", papel: "SECUNDÁRIA" },
    { nome: "PRETO", hex: "#0B0907", papel: "SECUNDÁRIA" },
  ],
  identidade: [
    {
      titulo: "CORES",
      texto: "Laranja é a cor da familia — bandana, lenço no retrovisor, grafite no muro. Branco e preto completam: camiseta branca lisa e o preto do uniforme de guerra. Quem cruza o barrio entende na hora de quem é a rua.",
    },
    {
      titulo: "SÍMBOLO",
      texto: "O sol asteca. Os veteranos carregam ele tatuado no antebraço. A quebrada, pichado no muro da praça.",
    },
    {
      titulo: "VESTIMENTA",
      texto: "Chicano clássico: camiseta branca lisa ou flanela abotoada só no colarinho, calça cargo, corrente, óculos escuro e a bandana laranja. Quando a coisa pesa, a familia fecha em preto com detalhe laranja.",
    },
    {
      titulo: "VEÍCULOS",
      texto: "Lowrider é religião aqui. Preto com detalhe laranja, hidráulica e som alto. O comboio saindo da quadra é um espetáculo que a cidade reconhece de longe.",
    },
    {
      titulo: "COSTUMES",
      texto: "Respeito aqui se mostra na ação: veterano entra na frente, novato segura a porta. Rolê de lowrider devagar pela quebrada, churrasco que junta o bairro e grafite marcando cada esquina que é nossa. Caído da familia vira homenagem na rua, nunca assunto de fofoca.",
    },
    {
      titulo: "LEMA",
      texto: "\"El barrio es primero.\" Antes do dinheiro, antes de aliança, antes de qualquer ego.",
    },
  ],

  /* ─────────── 03 · TERRITÓRIO & ATUAÇÃO ─────────── */
  territorio: {
    descricao:
      "Nosso território é o Barrio Del Este, no leste de Los Santos (in-game: 1148, -1448): projeto habitacional de periferia com pátio, quadra e piscina, comércio de esquina e uma área industrial nos fundos. Escolhemos um barrio afastado das áreas centrais pra não atropelar território de facção já estabelecida. A vizinhança dá espaço pra negociação, atrito e história com começo, meio e fim.",

    imagens: [
      { src: "assets/img/barrio-aerea.jpg", legenda: "VISTA AÉREA — o barrio e seus limites (Barrio Del Este)" },
      { src: "assets/img/barrio-patio.jpg", legenda: "O PÁTIO — piscina e ponto de encontro da familia" },
      { src: "assets/img/barrio-comboio.jpg", legenda: "A FAMILIA — o comboio de lowriders no barrio" },
    ],

    vertentes: [
      {
        titulo: "CULTURA DE RUA",
        texto: "Encontro de lowrider, racha combinado, grafite e festa de quadra aberta para a cidade. RP civil que movimenta quem nem é da facção.",
      },
      {
        titulo: "COMÉRCIO DO BAIRRO",
        texto: "Fachadas legítimas (oficina, taqueria, brechó) que dão emprego dentro do RP, cenário social e uma explicação plausível para o dinheiro da familia.",
      },
      {
        titulo: "ILÍCITO ESTRUTURADO",
        texto: "Atividade ilícita dentro das regras da cidade, com progressão gradual e motivação construída em RP. Nada de farm de mecânica: se não gera história, não nos interessa.",
      },
      {
        titulo: "POLÍTICA DE RUA",
        texto: "Aliança, trégua e rivalidade negociadas com as outras organizações. Guerra é o último recurso e, quando a cidade exigir, passa antes pela staff.",
      },
    ],

    // postura de rua — ponto de partida vindo da origem dos Aztecas.
    // Na cidade, tudo se constrói em RP; nada disso é guerra automática.
    postura: {
      intro: "A origem dos Aztecas já aponta de que lado a gente costuma ficar. Isso é ponto de partida, não decreto: na Cidade dos Anjos, aliança e rivalidade nascem no RP e, quando a coisa aperta, passam pela staff.",
      aliados: [
        "Grove Street Families — laço antigo de quebrada contra inimigo comum. Respeito de rua entre iguais, nunca subordinação.",
        "Comércio e moradores do barrio — quem vive e trabalha no território anda sob a proteção da familia.",
      ],
      rivais: [
        "Los Santos Vagos — a rixa mais antiga dos Aztecas, de território e de respeito. Vem de longe e continua de pé.",
        "Quem desrespeitar o barrio ou mexer com a familia — aí o resto se resolve na rua, com contexto e sem RDM.",
      ],
    },
  },

  /* ─────────── 04 · QG (EL CUARTEL) ───────────
     mapaPreferido: o mapa que a facção quer, com player embutido em destaque.
     alternativas: outras opções para a staff escolher (cards clicáveis).
     youtube: aceita link completo ou só o ID (ex.: "-44tcyjfBlQ"). */
  qg: {
    descricao:
      "O mapa que a gente quer pra esse barrio é o Barrio Del Este, do SOLOTY. É ele que vira a casa da familia — o pátio, a quadra e a rua onde tudo acontece. Abaixo, o tour dele em destaque, e três alternativas caso a staff prefira outro.",

    mapaPreferido: {
      nome: "Barrio Del Este",
      criador: "SOLOTY",
      youtube: "-44tcyjfBlQ",
      local: "El Burro Heights, leste de Los Santos",
    },

    alternativas: [
      { nome: "Florence District", criador: "SOLOTY", youtube: "_AUiJP_XYSI", local: "Rancho (norte), sudeste de Los Santos" },
      { nome: "Bighorn Gardens", criador: "", youtube: "XjlzZJG-bW4", local: "Rancho, sudeste de Los Santos" },
      { nome: "Amalia Street — East L.A.", criador: "", youtube: "K64TtXDrpP0", local: "Rancho / leste de Los Santos" },
      { nome: "Mirror Palms District", criador: "", youtube: "gQ03K8Uhcuw", local: "Mirror Park, leste de Los Santos" },
      { nome: "San Fernando Gardens", criador: "", youtube: "pye4zLmSqmg", local: "South Los Santos" },
      { nome: "South LA Extension", criador: "", youtube: "ArLWADq-tyg", local: "Davis / Grove Street, sul de Los Santos" },
    ],

    detalhes: [
      {
        titulo: "O PÁTIO",
        texto: "Piscina, cadeira de praia e o toldo azul. É o coração do barrio: onde a familia senta, resolve e recebe visita.",
      },
      {
        titulo: "A QUADRA",
        texto: "Basquete, som ligado e movimento. Ponto de encontro aberto que puxa RP de quem nem é da facção.",
      },
      {
        titulo: "A RUA",
        texto: "Lowrider e moto estacionados no pátio. É a vitrine da familia e o ponto de saída do comboio.",
      },
      {
        titulo: "OS APÊS",
        texto: "Os apartamentos ao redor abrigam a familia e escondem o lado ilícito do RP, sempre dentro das regras da cidade.",
      },
    ],

    // galeria do barrio — prints do mapa. Troque src pelo caminho do arquivo.
    galeria: [
      { src: "assets/img/barrio-capa.jpg", legenda: "BARRIO DEL ESTE — o cartão de visita" },
      { src: "assets/img/barrio-rua.jpg", legenda: "A RUA — oficina de lowrider a céu aberto" },
      { src: "assets/img/barrio-respeito.jpg", legenda: "RESPEITO — a familia na quebrada" },
      { src: "assets/img/barrio-fundos.jpg", legenda: "OS FUNDOS — garagens e área industrial" },
      { src: "assets/img/barrio-interior.jpg", legenda: "POR DENTRO — os apês são enteráveis" },
      { src: "assets/img/barrio-imoveis.jpg", legenda: "IMÓVEIS — prédios enteráveis do mapa" },
    ],
  },

  /* ─────────── 05 · HIERARQUIA ─────────── */
  hierarquia: [
    {
      cargo: "EL JEFE",
      funcao: "Palavra final da familia. É quem responde pela facção diante da staff e das outras organizações.",
      nome: "Amanda Campos",
      id: "ID 535",
      foto: "assets/img/amanda-jefe.jpg",
    },
    {
      cargo: "SEGUNDO",
      funcao: "Braço direito. Assume quando o Jefe não está e toca a operação do dia a dia.",
      nome: "Slim Devereaux",
      id: "ID 2983",
      foto: "assets/img/slim-segundo.jpg",
    },
  ],

  // texto acima da grade de soldados
  tropaIntro:
    "A tropa é a linha de frente do barrio: território, escolta, negócio e presença de rua. Novato entra em período de prova, com padrinho, e só veste as cores depois de provar lealdade e RP.",

  // efetivo — ordenado por ID. id: "" quando ainda não definido.
  soldados: [
    { nome: "Giordana Pellegrini", id: "#311" },
    { nome: "Alessandra Martins", id: "#359" },
    { nome: "Apollo Aldrin", id: "#555" },
    { nome: "Arne Follen", id: "#619" },
    { nome: "Thalia Trovi", id: "#620" },
    { nome: "Ryder Sadick", id: "#633" },
    { nome: "Neo Galanis", id: "#651" },
    { nome: "Cirilu Deluca", id: "#669" },
    { nome: "Barbara Sativa", id: "#727" },
    { nome: "Cleber Aditto", id: "#749" },
    { nome: "Nikaia Galanis", id: "#793" },
    { nome: "Akin Follen", id: "#1089" },
    { nome: "Gabriel Aditto", id: "#1136" },
    { nome: "Alerrandro Ryouhei", id: "#1138" },
    { nome: "Pedro Kalashnikov", id: "#1571" },
    { nome: "John Paixão", id: "#1638" },
    { nome: "Sophia Medinacelli", id: "#2084" },
    { nome: "Rennan Macallan", id: "#2382" },
    { nome: "David Marconi", id: "#2436" },
    { nome: "Herrera Macallan", id: "#2520" },
    { nome: "Coud Zion", id: "#2564" },
    { nome: "Alissa Garcez", id: "#3136" },
    { nome: "Jhon Garcez", id: "" },
    { nome: "Guilherme Wonderx", id: "" },
  ],

  /* ─────────── 06 · CÓDIGO DE CONDUTA ─────────── */
  conduta: {
    // lei interna da facção — vale só para os personagens, dentro do RP
    internas: [
      "O bairro vem primeiro. Negócio nenhum passa na frente da familia.",
      "Veterano fala, novato escuta. A hierarquia do personagem se resolve no personagem.",
      "Ninguém age em nome dos Aztecas por conta própria. Ação de facção passa pela liderança.",
      "Assunto da familia morre dentro da familia.",
      "Manchou o nome do bairro, responde ao conselho. A punição acontece em RP.",
    ],
    // compromissos fora do personagem, com a cidade e com a staff
    servidor: [
      "Regra da Cidade dos Anjos vem acima de qualquer regra nossa. Sem exceção, sem interpretação criativa.",
      "Valorização de vida sempre. Ninguém troca tiro sem motivação construída em RP.",
      "Conflito só com contexto e escalada. Nada de RDM ou VDM: o outro lado sempre tem chance de responder.",
      "Sem metagaming, sem powergaming. Informação só vale se nasceu dentro do RP.",
      "Guerra e ação grande seguem o rito da cidade: registro, autorização e horário combinado.",
      "Hierarquia é coisa do personagem. Fora do RP somos jogadores iguais, e respeito vale para membro e para qualquer player da cidade.",
      "Membro problemático: a primeira quebra de regra gera advertência interna registrada. Reincidiu, é suspenso das atividades. Caso grave, é expulso e a liderança entrega provas e clipes à staff.",
    ],
  },

  /* ─────────── 07 · PLANO DOS PRIMEIROS 90 DIAS ─────────── */
  plano: [
    {
      fase: "FASE 1",
      periodo: "SEMANAS 1–2",
      titulo: "RAIZ",
      texto: "Chegada discreta. Apresentação dos personagens no bairro, abertura da fachada comercial e primeiros laços com vizinho e comércio local. Zero conflito nesse período.",
    },
    {
      fase: "FASE 2",
      periodo: "SEMANAS 3–6",
      titulo: "PRESENÇA",
      texto: "O bairro ganha cara: grafite, encontro de lowrider, movimento na praça. O ilícito começa pequeno, na progressão que a cidade permite.",
    },
    {
      fase: "FASE 3",
      periodo: "SEMANAS 7–12",
      titulo: "POLÍTICA",
      texto: "Relação com as outras organizações: acordo, fornecimento, rota. Se nascer rivalidade, nasce com contexto que todo mundo acompanhou. Antes de crescer mais, sentamos com a staff para avaliar o que funcionou.",
    },
  ],

  /* ─────────── 08 · O QUE AGREGAMOS À CIDADE ─────────── */
  // frase-diferencial, aparece em destaque no topo da seção
  contribuicoesLead:
    "A maioria das facções chega trazendo tiro. A gente chega trazendo um bairro vivo — lowrider, festa, grafite e uma história que puxa RP pra polícia, pra imprensa e pras outras facções. Conflito com os Aztecas tem contexto, começo e fim. Nunca é gatilho gratuito.",
  contribuicoes: [
    {
      titulo: "NOITE DO LOWRIDER",
      texto: "Encontro aberto de carro rebaixado, com premiação em RP. Não é evento da facção para a facção: é para a cidade inteira aparecer.",
    },
    {
      titulo: "HISTÓRIA COM COMEÇO, MEIO E FIM",
      texto: "Arco narrativo planejado pela liderança: ascensão, traição interna, disputa de esquina. Conflito que dá trabalho para a polícia, pauta para a imprensa e RP para as outras facções.",
    },
    {
      titulo: "PORTA DE ENTRADA PARA RP DE RUA",
      texto: "Jogador novo na cidade aprende RP dentro de uma estrutura com padrinho, em vez de virar gatilho fácil em esquina aleatória.",
    },
    {
      titulo: "CULTURA VIVA NO MAPA",
      texto: "Grafite, som, comida de rua e comércio aberto. Uma região que hoje é cenário morto passa a ter rotina, rosto e movimento.",
    },
  ],

  /* ─────────── 09 · ASSINATURA ─────────── */
  firmas: [
    { nome: "Amanda Campos", cargo: "EL JEFE" },
    { nome: "Slim Devereaux", cargo: "SEGUNDO" },
  ],
};
