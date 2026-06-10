"use client";
// app/page.tsx — Javari Connect (Dating)
// Turbopack-safe: inline styles only, no framer-motion, no Tailwind
// CR AudioViz AI · EIN 39-3646201 · June 2026
import { useState } from "react";

const FEATURES = [
  { icon:"🤖", title:"AI Matchmaking",      desc:"Javari AI analyzes compatibility beyond just interests — understanding values, communication styles, and life goals" },
  { icon:"🔐", title:"Privacy First",        desc:"Your data is yours. We never sell profiles or share information with third parties. Ever." },
  { icon:"💬", title:"Meaningful Conversations", desc:"AI-guided icebreakers that lead to real connections, not small talk" },
  { icon:"✅", title:"Verified Profiles",    desc:"Photo and identity verification to ensure authentic connections" },
  { icon:"🗺️", title:"Local & Global",       desc:"Meet people in Fort Myers or anywhere in the world based on your preferences" },
  { icon:"❤️",  title:"Relationship Goals",  desc:"Whether you're looking for friendship, dating, or a life partner — we match your intentions" },
];

export default function DatingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function joinWaitlist() {
    if (email.includes("@")) {
      setSubmitted(true);
    }
  }

  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(180deg,#0d0a14 0%,#140a1e 100%)",
      color:"#e2e8f0",fontFamily:"system-ui,sans-serif"}}>

      {/* Nav */}
      <nav style={{position:"sticky",top:0,zIndex:100,
        background:"rgba(13,10,20,0.95)",backdropFilter:"blur(12px)",
        borderBottom:"1px solid rgba(255,255,255,0.06)",padding:"0 24px"}}>
        <div style={{maxWidth:1100,margin:"0 auto",height:60,
          display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <span style={{fontSize:22}}>💫</span>
            <span style={{fontSize:16,fontWeight:800,color:"#fff"}}>Javari Connect</span>
          </div>
          <a href="https://craudiovizai.com/auth/signup" style={{
            background:"linear-gradient(135deg,#EC4899,#8B5CF6)",color:"#fff",
            textDecoration:"none",padding:"8px 18px",borderRadius:8,
            fontSize:13,fontWeight:700}}>
            Join Free
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{maxWidth:800,margin:"0 auto",padding:"90px 24px 70px",textAlign:"center"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:8,
          background:"rgba(236,72,153,0.12)",border:"1px solid rgba(236,72,153,0.3)",
          borderRadius:100,padding:"6px 16px",marginBottom:24,fontSize:13,color:"#F472B6"}}>
          <span>✨</span> AI-powered meaningful connections
        </div>
        <div style={{fontSize:"clamp(30px,6vw,58px)",fontWeight:900,lineHeight:1.15,
          margin:"0 0 20px",background:"linear-gradient(135deg,#fff,#EC4899,#8B5CF6)",
          WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
          Find Your Person.<br/>Not Just a Match.
        </div>
        <p style={{fontSize:18,color:"#9CA3AF",maxWidth:520,margin:"0 auto 40px",lineHeight:1.7}}>
          Javari AI goes beyond swipes to help you build genuine connections
          based on who you actually are — not just your photos.
        </p>

        {submitted ? (
          <div style={{background:"rgba(16,185,129,0.1)",border:"1px solid rgba(16,185,129,0.3)",
            borderRadius:14,padding:24,display:"inline-block"}}>
            <div style={{fontSize:28,marginBottom:8}}>🎉</div>
            <div style={{fontSize:16,fontWeight:700,color:"#10B981"}}>You are on the waitlist!</div>
            <div style={{fontSize:14,color:"#6B7280",marginTop:4}}>
              We will notify you when Javari Connect launches in your area.
            </div>
          </div>
        ) : (
          <div>
            <div style={{display:"flex",gap:10,maxWidth:480,margin:"0 auto 12px",flexWrap:"wrap"}}>
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)}
                placeholder="your@email.com"
                onKeyDown={e=>{if(e.key==="Enter")joinWaitlist();}}
                style={{flex:1,minWidth:200,background:"rgba(255,255,255,0.06)",
                  border:"1px solid rgba(255,255,255,0.12)",borderRadius:12,
                  padding:"14px 18px",color:"#e2e8f0",fontSize:15,
                  fontFamily:"system-ui",outline:"none"}}/>
              <button onClick={joinWaitlist}
                style={{background:"linear-gradient(135deg,#EC4899,#8B5CF6)",
                  color:"#fff",border:"none",borderRadius:12,padding:"14px 24px",
                  fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"system-ui",
                  whiteSpace:"nowrap"}}>
                Join Waitlist
              </button>
            </div>
            <p style={{fontSize:13,color:"#4B5563"}}>
              Free to join · No credit card · Launching Q3 2026
            </p>
          </div>
        )}
      </section>

      {/* Features */}
      <section style={{maxWidth:900,margin:"0 auto",padding:"0 24px 80px"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:14}}>
          {FEATURES.map(f=>(
            <div key={f.title} style={{background:"rgba(255,255,255,0.03)",
              border:"1px solid rgba(236,72,153,0.12)",borderRadius:14,padding:24}}>
              <div style={{fontSize:28,marginBottom:10}}>{f.icon}</div>
              <div style={{fontSize:15,fontWeight:700,color:"#fff",marginBottom:8}}>{f.title}</div>
              <div style={{fontSize:13,color:"#6B7280",lineHeight:1.7}}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{borderTop:"1px solid rgba(255,255,255,0.06)",padding:"32px 24px",
        textAlign:"center",fontSize:12,color:"#374151"}}>
        CR AudioViz AI · EIN 39-3646201 · SAM.gov UEI H5T3QG19ND91 · Fort Myers, FL<br/>
        <a href="https://craudiovizai.com" style={{color:"#6B7280",textDecoration:"none"}}>
          Powered by CR AudioViz AI Platform
        </a>
      </footer>
    </div>
  );
}
