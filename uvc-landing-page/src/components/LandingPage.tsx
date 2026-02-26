import {
    BookOpenIcon,
    HeartIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";

import logo from "../assets/img/logo.png";
import historyImage from "../assets/img/history.jpeg";
import config from "../assets/config.json";
import { useEffect, useState } from "react";

export default function LandingPage() {
    const words = [
        "Jesus",
        "Esperança",
        "Graça",
        "Comunhão",
        "Verdade",
        "Propósito",
        "Amor",
        "Renovo"
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-slate-50 text-slate-900 font-sans selection:bg-red-100 selection:text-red-700">

            <div className="marca-dagua" />

            {/* NAVBAR - Sticky & Glassmorphism */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="p-1 rounded-lg group-hover:scale-110 transition-transform">
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-8 h-8 object-contain brightness-0"
                            />
                        </div>
                        <h1 className="text-xl font-black tracking-tighter text-slate-800">
                            <span className="text-red-500">U</span>ma{" "}
                            <span className="text-red-500">V</span>ida com{" "}
                            <span className="text-red-500">C</span>risto
                            <span className="text-red-500">.</span>
                        </h1>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                        <a href="#sobre" className="hover:text-red-600 transition-colors">Sobre</a>
                        <a href="#missao" className="hover:text-red-600 transition-colors">Missão</a>
                        <a href="#redes" className="hover:text-red-600 transition-colors">Redes</a>
                    </div>
                </div>
            </nav>

            {/* HERO SECTION - Typography focused */}
            <section className="relative pt-40 pb-24 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                    <div className="absolute top-24 left-1/4 w-72 h-72 bg-red-200/30 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                        Viva uma vida com <br />
                        <span className="inline-flex items-center gap-4 mt-2">
                            <span
                                key={words[index]} // A 'key' força o React a remontar o elemento e disparar a animação
                                className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 animate-fade-in-up"
                            >
                                {words[index]}
                            </span>
                        </span>
                    </h2>

                    <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Um projeto dedicado a edificar vidas através das Escrituras Sagradas e do amor que transforma.
                    </p>
                </div>
            </section>

            {/* SOBRE - Modern Layout Split */}
            <section id="sobre" className="py-24 px-6">
                <div className="max-w-6xl mx-auto bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-16 shadow-sm flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-12 h-1 bg-red-600 rounded-full inline-block"></span>
                            Nossa História
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Em 2013, com uma oração, nasceu o <strong>Uma Vida com Cristo</strong>.
                            Não somos apenas um site, somos um farol para quem busca clareza em tempos de incerteza.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Nossa base é a Palavra. Nossa ferramenta é a verdade. Nossa paixão é ver o Evangelho
                            alcançando corações através de estudos e devocionais profundos.
                        </p>
                    </div>
                    <div className="flex-1 w-full h-64 bg-white rounded-3xl overflow-hidden relative shadow-inner border border-slate-100">
                        {/* Gradiente suave de fundo para dar profundidade */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent" />

                        <div className="flex items-center justify-center h-full p-8">
                            <img
                                src={historyImage}
                                alt="Ilustração Uma Vida com Cristo"
                                className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ÚLTIMOS VÍDEOS */}
            <section id="videos" className="py-24 px-6 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Últimos Vídeos
                        </h2>
                        <p className="text-slate-600">
                            Acompanhe os conteúdos mais recentes do canal Uma Vida com Cristo.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {config.latestVideos.map((id, idx) => (
                            <div
                                key={idx}
                                className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform bg-white"
                            >
                                <iframe
                                    className="w-full aspect-video"
                                    src={`https://www.youtube.com/embed/${id}`}
                                    title={`YouTube video ${idx}`}
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href="https://www.youtube.com/@umavidacomcristo4074"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-700 transition-all shadow-lg"
                        >
                            Visitar Canal
                        </a>
                    </div>
                </div>
            </section>

            {/* MISSÃO - Feature Cards */}
            <section id="missao" className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Como servimos ao Reino</h2>
                        <p className="text-slate-400">Três pilares que sustentam nossa caminhada cristã.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: BookOpenIcon, title: "Estudos Bíblicos", desc: "Conteúdo sólido e profundo para seu crescimento espiritual diário." },
                            { icon: HeartIcon, title: "Devocionais", desc: "Reflexões diárias fundamentadas na sã doutrina e na graça." },
                            { icon: UserGroupIcon, title: "Comunidade (em breve!)", desc: "Um espaço para conexão entre pessoas que desejam ser como Cristo." }
                        ].map((item, idx) => (
                            <div key={idx} className="group p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-red-500/50 transition-all hover:-translate-y-2">
                                <item.icon className="w-12 h-12 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="redes" className="py-24 text-center px-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-10">Nos acompanhe</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {config.socialNetworks.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 rounded-full border border-slate-200 font-semibold text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all active:scale-95"
                        >
                            {social.name}
                        </a>
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-white border-t border-slate-100 py-12 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <div>
                        <p className="font-bold text-slate-900 italic">Uma Vida com Cristo</p>
                        <p className="text-sm text-slate-500 mt-1">© {new Date().getFullYear()} — Todos os direitos reservados.</p>
                    </div>
                    <div className="flex gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
                        <span>Evangelho</span>
                        <span>Discipulado</span>
                        <span>Crescimento</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}