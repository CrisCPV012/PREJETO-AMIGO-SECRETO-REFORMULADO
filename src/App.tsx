import React, { useState } from 'react';
import { Car, Users, Shuffle, Mail, Plus, Trash2, Settings, List, Gauge, Trophy, History, Factory } from 'lucide-react';

interface Participant {
  id: string;
  name: string;
  email: string;
}

type Tab = 'participants' | 'rules' | 'volkswagen' | 'fiat' | 'chevrolet' | 'ford';

function App() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [drawn, setDrawn] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('participants');

  const addParticipant = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setParticipants([...participants, { 
        id: crypto.randomUUID(),
        name, 
        email 
      }]);
      setName('');
      setEmail('');
    }
  };

  const removeParticipant = (id: string) => {
    setParticipants(participants.filter(p => p.id !== id));
  };

  const drawNames = () => {
    setDrawn(true);
  };

  const carBrands = {
    volkswagen: {
      title: "Volkswagen do Brasil",
      image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80",
      history: "Volkswagen começou sua história no Brasil em 1953, com a montagem da Kombi. A fábrica Anchieta em São Bernardo do Campo se tornou um marco na industrialização brasileira. O Fusca e a Brasília são ícones que marcaram gerações.",
      models: ["Gol", "Brasília", "Fusca", "Kombi", "SP2"]
    },
    fiat: {
      title: "Fiat Automóveis",
      image: "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?auto=format&fit=crop&q=80",
      history: "A Fiat chegou ao Brasil em 1976 com a fábrica em Betim, Minas Gerais. O Fiat 147 foi o primeiro carro mundial a usar motor a álcool, uma inovação brasileira.",
      models: ["Uno", "Palio", "147", "Marea", "Tempra"]
    },
    chevrolet: {
      title: "Chevrolet Brasil",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80",
      history: "A GM iniciou suas operações no Brasil em 1925, em São Caetano do Sul. O Chevrolet Opala foi o primeiro carro de passeio produzido pela marca no país.",
      models: ["Opala", "Chevette", "Monza", "Kadett", "Corsa"]
    },
    ford: {
      title: "Ford Brasil",
      image: "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&q=80",
      history: "A Ford foi a primeira montadora a se instalar no Brasil, em 1919. O Galaxie e o Maverick são lembrados como símbolos de uma era dourada da indústria automotiva brasileira.",
      models: ["Maverick", "Galaxie", "Corcel", "Del Rey", "Escort"]
    }
  };

  const renderBrandContent = (brand: keyof typeof carBrands) => (
    <div className="space-y-6">
      <div 
        className="h-48 rounded-lg overflow-hidden mb-6"
        style={{
          backgroundImage: `url('${carBrands[brand].image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">{carBrands[brand].title}</h2>
      <p className="text-green-300 mb-6">{carBrands[brand].history}</p>
      <div>
        <h3 className="text-xl font-semibold text-yellow-400 mb-3">Modelos Icônicos:</h3>
        <div className="grid grid-cols-2 gap-4">
          {carBrands[brand].models.map((model) => (
            <div key={model} className="bg-green-900/30 p-4 rounded-lg border border-green-500/30">
              <Car className="w-6 h-6 text-green-400 mb-2" />
              <p className="text-green-300">{model}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-green-900 via-black to-yellow-900"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1579116164724-a11ed62b1c1f?auto=format&fit=crop&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center mb-4 relative">
              <div className="absolute inset-0 blur-xl bg-green-500/30 rounded-full animate-pulse"></div>
              <Car className="w-20 h-20 text-green-500 relative z-10 transform -rotate-12" />
              <Trophy className="w-10 h-10 text-yellow-400 absolute -right-2 top-0 z-20" />
              <Factory className="w-8 h-8 text-green-400 absolute -left-2 bottom-0 z-20" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-2 text-shadow-lg">Clássicos Brasileiros</h1>
            <p className="text-green-300 text-lg">Celebrando Nossa História Automotiva</p>
          </div>

          <div className="bg-black/60 backdrop-blur-xl rounded-lg shadow-2xl overflow-hidden border border-green-500/30">
            <div className="flex flex-wrap border-b border-green-500/30">
              <button
                onClick={() => setActiveTab('participants')}
                className={`flex items-center px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === 'participants'
                    ? 'bg-green-900/50 text-green-400 border-b-2 border-green-400'
                    : 'text-green-300 hover:text-green-400 hover:bg-green-900/30'
                }`}
              >
                <Users className="w-4 h-4 mr-2" />
                Participantes
              </button>
              <button
                onClick={() => setActiveTab('rules')}
                className={`flex items-center px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === 'rules'
                    ? 'bg-green-900/50 text-green-400 border-b-2 border-green-400'
                    : 'text-green-300 hover:text-green-400 hover:bg-green-900/30'
                }`}
              >
                <List className="w-4 h-4 mr-2" />
                Regras
              </button>
              {Object.keys(carBrands).map((brand) => (
                <button
                  key={brand}
                  onClick={() => setActiveTab(brand as Tab)}
                  className={`flex items-center px-6 py-4 text-sm font-medium transition-colors ${
                    activeTab === brand
                      ? 'bg-green-900/50 text-green-400 border-b-2 border-green-400'
                      : 'text-green-300 hover:text-green-400 hover:bg-green-900/30'
                  }`}
                >
                  <History className="w-4 h-4 mr-2" />
                  {carBrands[brand as keyof typeof carBrands].title}
                </button>
              ))}
            </div>

            <div className="p-8">
              {activeTab === 'participants' && (
                <>
                  <h2 className="text-2xl font-bold mb-6 flex items-center text-green-300">
                    <Car className="w-6 h-6 mr-3" />
                    Registrar Participantes
                  </h2>
                  
                  <form onSubmit={addParticipant} className="space-y-4">
                    <div className="flex gap-4">
                      <input
                        type="text"
                        placeholder="Nome do Participante"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="flex-1 rounded-md bg-black/50 border-green-500/30 text-green-100 placeholder-green-700 shadow-inner focus:border-green-400 focus:ring focus:ring-green-400/20 p-3"
                      />
                      <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 rounded-md bg-black/50 border-green-500/30 text-green-100 placeholder-green-700 shadow-inner focus:border-green-400 focus:ring focus:ring-green-400/20 p-3"
                      />
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-md hover:from-green-700 hover:to-green-800 transition-colors flex items-center shadow-lg shadow-green-500/20"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Adicionar
                      </button>
                    </div>
                  </form>

                  <div className="mt-8 space-y-4">
                    {participants.map((participant) => (
                      <div
                        key={participant.id}
                        className="flex items-center justify-between bg-green-900/20 border border-green-500/20 p-4 rounded-md backdrop-blur-sm hover:bg-green-900/30 transition-colors"
                      >
                        <div>
                          <p className="font-medium text-green-300 text-lg">{participant.name}</p>
                          <p className="text-sm text-green-500">{participant.email}</p>
                        </div>
                        <button
                          onClick={() => removeParticipant(participant.id)}
                          className="text-green-400 hover:text-green-300 transition-colors p-2 hover:bg-green-900/30 rounded-full"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {participants.length >= 3 && !drawn && (
                    <button
                      onClick={drawNames}
                      className="mt-8 w-full bg-gradient-to-r from-yellow-600 to-green-600 text-white px-6 py-4 rounded-md hover:from-yellow-700 hover:to-green-700 transition-colors flex items-center justify-center shadow-lg shadow-green-500/20 text-lg font-semibold"
                    >
                      <Gauge className="w-6 h-6 mr-3 animate-pulse" />
                      Iniciar Sorteio
                    </button>
                  )}

                  {drawn && (
                    <div className="mt-8 text-center p-6 bg-gradient-to-r from-green-900/30 to-yellow-900/30 border border-green-400/30 rounded-md backdrop-blur-sm">
                      <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                      <p className="text-green-300 text-lg">
                        Sorteio realizado! Verifique seu e-mail para saber seu par no amigo secreto.
                      </p>
                    </div>
                  )}

                  {participants.length < 3 && (
                    <p className="mt-6 text-sm text-green-500 text-center">
                      Mínimo de 3 participantes necessários para iniciar
                    </p>
                  )}
                </>
              )}

              {activeTab === 'rules' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center text-green-300">
                    <Trophy className="w-6 h-6 mr-3" />
                    Regras do Amigo Secreto
                  </h2>
                  <div className="prose prose-invert">
                    <ul className="space-y-4 text-green-300">
                      <li className="flex items-start">
                        <span className="mr-3 text-yellow-500">🚗</span>
                        Cada participante será sorteado para presentear outro com um item relacionado a carros brasileiros
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-yellow-500">🔒</span>
                        Mantenha seu sorteado em segredo até a revelação
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-yellow-500">👥</span>
                        Mínimo de 3 participantes para realizar o sorteio
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-yellow-500">📱</span>
                        As informações serão enviadas por e-mail
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-yellow-500">🎁</span>
                        Escolha presentes que celebrem nossa história automotiva
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {(activeTab === 'volkswagen' || activeTab === 'fiat' || activeTab === 'chevrolet' || activeTab === 'ford') && 
                renderBrandContent(activeTab)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;