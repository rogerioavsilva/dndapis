on("chat:message", function(msg) {
    var styleTh = "style='border: 1px solid black;'";
    var styleHits = "style='color:green;'";
    var styleFailure = "style='color:red;'";
    var styleCont = "style='color:purple'";
    var stylePerf = "style='color:orange'";
    var styleCort = "style='color:red'";
    var styleMag = "style='color:blue'";
  
    const criticalsHit = [
          {
            id : 1, 
             criticalType : [{ 
                                  type: "contusao", 
                                  typeDescription: "Contusão",
                                  title: "Traqueia Esmagada", 
                                  description: "o alvo fica incapacitado(lj p.288), não pode falar e respirar, até o início de seu próximo turno" 
                              },
                              { 
                                  type: "perfuracao", 
                                  typeDescription: "Perfuração",
                                  title: "Mão Perfurada", 
                                  description: "o alvo solta um item que tiver segurando. Esse membro não pode ser usado, até o início de seu próximo turno" 
                              },
                              {
                                  type: "cortante", 
                                  typeDescription: "Cortante",
                                  title: "Testa Cortada", 
                                  description: "o alvo fica cego (ldj p.287), até o início de seu próximo turno." 
                              },
                              {
                                  type: "magico", 
                                  typeDescription: "Mágico",
                                  title: "Vunerabilidade Mágica", 
                                  description: "o alvo tem vulnerabilidade a dano mágico (ldj p.197), até o próximo turno início de seu próximo turno." 
                              }]
          },
          {
            id : 2, 
             criticalType : [
                                  { 
                                      type: "contusao", 
                                      typeDescription: "Contusão",
                                      title: "Pancada na Barriga", 
                                      description: "o alvo não consegue se alimentar ou ingerir líquidos, até receber tratamento." 
                                  },
                                  { 
                                      type: "perfuracao", 
                                      typeDescription: "Perfuração",
                                      title: "Clático Pinçado", 
                                      description: "o alvo faz um teste de resistência de constituição CD 15. Se falhar, fica impedido (ldj p.288), até receber tratamento." 
                                  },
                                  {
                                      type: "cortante", 
                                      typeDescription: "Cortante",
                                      title: "Coluna Machucada", 
                                      description: "o alvo fica caído (ldj p.287), não podendo levantar, até receber tratamento." 
                                  },
                                  {
                                      type: "magico", 
                                      typeDescription: "Mágico",
                                      title: "Encolhimento", 
                                      description: "o alvo tem seu tamanho reduzido, como na magia 'Aumentar/Reduzir' (ldj p.217), até receber tratamento." 
                                  }
                              ]
          },
          {
            id : 3, 
             criticalType : [
                                  { 
                                      type: "contusao", 
                                      typeDescription: "Contusão",
                                      title: "Ombro Deslocado", 
                                      description: "o alvo não pode realizar um 'Encontrão' até receber tratamento." 
                                  },
                                  { 
                                      type: "perfuracao", 
                                      typeDescription: "Perfuração",
                                      title: "Pulmão Perfurado", 
                                      description: "o alvo adquire 2 níveis de exaustão (ldj p.288), que podem ser removidos com tratamento." 
                                  },
                                  {
                                      type: "cortante", 
                                      typeDescription: "Cortante",
                                      title: "Artéria Cortada", 
                                      description: "o alvo faz um teste de resistência de constituição CD 15. Se falhar, sofre dano igual a metade dos pontos de vida restantes." 
                                  },
                                  {
                                      type: "magico", 
                                      typeDescription: "Mágico",
                                      title: "Afeto Mágico", 
                                      description: "o alvo fica enfeitiçado (ldj´p.288) por você, até o início de seu próximo turno." 
                                  }
                              ]
          },
          {
            id : 4, 
             criticalType : [
                                  { 
                                      type: "contusao", 
                                      typeDescription: "Contusão",
                                      title: "Enxergando Estrelas", 
                                      description: "o alvo fica com sensibilidade á luz, desvantagem em jogadas de ataques e testes de sabedoria (percepção), até o fim do encontro." 
                                  },
                                  { 
                                      type: "perfuracao", 
                                      typeDescription: "Perfuração",
                                      title: "Bem no Nervo", 
                                      description: "o alvo fica atordoado (ldj p.287), até o início de seu próximo turno." 
                                  },
                                  {
                                      type: "cortante", 
                                      typeDescription: "Cortante",
                                      title: "Cicatriz no Rosto", 
                                      description: "o alvo tem desvantagem em testes de carisma (persuasão) e vantagem em testes de carisma (intimidação), até receber tratamento." 
                                  },
                                  {
                                      type: "magico", 
                                      typeDescription: "Mágico",
                                      title: "Transposição", 
                                      description: "o alvo troca de lugar com você." 
                                  }
                              ]
          }
      ];
    const criticalFailure = [
          {
              id : 1, 
              criticalType:[{ type: "melee", typeDescription: "Corpo a Corpo", title: "Ofensa Coletiva", description: "faça um teste de Carisma CD 15. Se falar, fica marcado, até que o alvo esteja morto, derrotado, ou for a do seu alcance." },
                           { type: "range", typeDescription: "Distância", title: "Má Pontaria", description: "Uma criatura aleatória mais distante do alvo se torna o novo alvo. Faça uma jogada de ataque contra ela." },
                           { type: "natural", typeDescription: "Natural", title: "Enjoado", description: "Você fica envenenado (ldj p. 288), até o fim do encontro." },
                           { type: "magic", typeDescription: "Mágico", title: "Fenda Mágica", description: "Você é teleportado para o local mais próximo adjacente ao alvo." }]
          },
          {
              id : 2, 
              criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Pulso Torcido', description: 'Suas jogadas de ataque corpo a corpo perdem o bônus de proeficiência, até o fim do encontro.' },
                            { type: 'range', typeDescription: 'Distância', title: 'Atrapalhado', description: 'Toda sua munição cai no chão.' },
                            { type: 'natural', typeDescription: 'Natural', title: 'Guarda Baixa', description: 'A próxima jogada de ataque realizada contra você tem vantagem.' },
                            { type: 'magic', typeDescription: 'Mágico', title: 'Energia Drenada', description: 'Você perde um espaço de magia de nível mais baixo que possuir.' }]
          },
          {
              id : 3, 
              criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Escapuliu', description: 'Sua arma cai no chão atrás do alvo.' },
                            { type: 'range', typeDescription: 'Distância', title: 'Agora é Pessoal', description: 'Você fica marcado apenas pelo alvo, até que ele esteja morto, derrotado, ou for a do seu alcance.' },
                            { type: 'natural', typeDescription: 'Natural', title: 'Foi de Encontro', description: 'A arma do alvo causa dano em você. Na ausência de uma arma, você sofre pontos de dano igual ao seu nível de personagem, ou nível de desafio (mínimo 1).' },
                            { type: 'magic', typeDescription: 'Mágico', title: 'Magia Invertida', description: 'A magia recupera pontos de vida ao invés de causar dano.' }]
          },
          {
                id : 4, 
                 criticalType:[{ type: 'melee', typeDescription: 'Corpo a Corpo', title: 'Piriri', description: 'Você tem desvantagem em testes de carisma, até realizar um descanso curto ou longo.' },
                            { type: 'range', typeDescription: 'Distância', title: 'Calcanhar do Amigo', description: 'Um aliado aleatório mais próximo ao alvo perde 1 dado de vida.' },
                            { type: 'natural', typeDescription: 'Natural', title: 'Frescura', description: 'Seus ataques causam metade do dano, até o fim de seu próximo turno.' },
                            { type: 'magic', typeDescription: 'Mágico', title: 'KA-GA\'DA', description: 'Um aliado aleatório fica marcado, até que o alvo esteja morto, derrotado, ou for a do seu alcance.' }]
          }
      ];   
      
    var rolled = randomInteger(4);
   
    if(msg.type == "api" && msg.content.indexOf("!HitsCritical") !== -1) {
      var hit = _critico(criticalsHit, rolled);
      var criticalType = msg.content.replace("!HitsCritical ", "");
  
      var table = "Try Again";
  
      table =  "<table> "+
                        "<tr> "+
                          "<th "+ styleTh +"><b "+ styleHits +">Acerto Crítico [ "+ rolled +" ]</b></th> "+
                        "</tr> ";
      
      if(criticalType === "contusao"){
          table = table + GetCriticalTemplate(styleCont, _.findWhere(hit.criticalType, {"type":"contusao"}));
      }else if(criticalType === "perfuracao"){
          table = table + GetCriticalTemplate(stylePerf, _.findWhere(hit.criticalType, {"type":"perfuracao"}));
      }else if(criticalType === "cortante"){
          table = table + GetCriticalTemplate(styleCort,  _.findWhere(hit.criticalType, {"type":"cortante"}));
      }else if(criticalType === "magico"){
          table = table + GetCriticalTemplate(styleMag, _.findWhere(hit.criticalType, {"type":"magico"}));
      }else{
          table = table + 
                  GetCriticalTemplate(styleCont, _.findWhere(hit.criticalType, {"type":"contusao"})) +
                  GetCriticalTemplate(stylePerf, _.findWhere(hit.criticalType, {"type":"perfuracao"})) +
                  GetCriticalTemplate(styleCort,  _.findWhere(hit.criticalType, {"type":"cortante"})) +
                  GetCriticalTemplate(styleMag, _.findWhere(hit.criticalType, {"type":"magico"}));
      }
      
      table = table + "</table> </br>";
  
      sendChat(msg.who,table);
      
    }
    
    if(msg.type == "api" && msg.content.indexOf("!FailureCritical") !== -1) {
      var fail = _critico(criticalFailure, rolled);  
      var criticalType = msg.content.replace("!FailureCritical ", "");
  
      var table = "Try Again";
  
      table =  "<table> "+
                        "<tr> "+
                          "<th "+ styleTh +"><b "+ styleFailure +">Falha Crítica [ "+ rolled +" ]</b></th> "+
                        "</tr> ";
      
      if(criticalType === "melee"){
          table = table + GetCriticalTemplate(styleCont, _.findWhere(fail.criticalType, {"type":"melee"}));
      }else if(criticalType === "range"){
          table = table + GetCriticalTemplate(stylePerf, _.findWhere(fail.criticalType, {"type":"range"}));
      }else if(criticalType === "natural"){
          table = table + GetCriticalTemplate(styleCort,  _.findWhere(fail.criticalType, {"type":"natural"}));
      }else if(criticalType === "magic"){
          table = table + GetCriticalTemplate(styleMag, _.findWhere(fail.criticalType, {"type":"magic"}));
      }else{
          table = table + 
                  GetCriticalTemplate(styleCont, _.findWhere(fail.criticalType, {"type":"melee"})) +
                  GetCriticalTemplate(stylePerf, _.findWhere(fail.criticalType, {"type":"range"})) +
                  GetCriticalTemplate(styleCort,  _.findWhere(fail.criticalType, {"type":"natural"})) +
                  GetCriticalTemplate(styleMag, _.findWhere(fail.criticalType, {"type":"magic"}));
      }
      
      table = table + "</table> </br>";
  
      sendChat(msg.who,table);
    }
    
    function _critico(criticals, rolled){
       return _.find(criticals, function(critical){
          return critical.id == rolled;
      });
    };
    
    function GetCriticalTemplate(style, criticalType){
      return  "<tr "+ styleTh +"> "+
                  "<td><b "+ style +">"+ criticalType.typeDescription +" &#x2692;</b></td> "+
              "</tr> "+
              "<tr> "+
                  "<td "+ styleTh +"><b "+ style +">"+ criticalType.title +"</b>, "+ criticalType.description +"</td> "+
              "</tr> ";  
    };
    
  });