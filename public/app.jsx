
;(function(){
/* HALEX UI Kit — primitives (window globals).
   These mirror the canonical Design System components in /components,
   inlined here so the landing recreation renders standalone. */

function Button({ children, variant='primary', size='md', href, type='button', fullWidth=false, disabled=false, iconLeft=null, iconRight=null, style={}, ...rest }) {
  const sizes = {
    sm:{padding:'9px 16px',fontSize:'0.875rem',gap:'8px'},
    md:{padding:'14px 24px',fontSize:'0.9375rem',gap:'10px'},
    lg:{padding:'18px 32px',fontSize:'1.0625rem',gap:'12px'},
  };
  const base={display:'inline-flex',alignItems:'center',justifyContent:'center',gap:sizes[size].gap,padding:sizes[size].padding,fontFamily:'var(--font-body)',fontWeight:'var(--fw-bold)',fontSize:sizes[size].fontSize,letterSpacing:'var(--ls-button)',textTransform:'uppercase',lineHeight:1,borderRadius:'var(--radius-sm)',border:'2px solid transparent',cursor:disabled?'not-allowed':'pointer',width:fullWidth?'100%':'auto',transition:'transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)',opacity:disabled?0.5:1,whiteSpace:'nowrap'};
  const variants={
    primary:{background:'var(--grad-gold)',color:'var(--text-on-gold)',boxShadow:'var(--glow-gold-sm)'},
    secondary:{background:'transparent',color:'var(--text-gold)',borderColor:'var(--border-gold)'},
    ghost:{background:'transparent',color:'var(--text-strong)',borderColor:'transparent'},
    dark:{background:'var(--ink-850)',color:'var(--white)',borderColor:'var(--ink-700)'},
    light:{background:'var(--gray-900)',color:'var(--white)'},
  };
  const hov={
    primary:(e,on)=>{e.currentTarget.style.transform=on?'translateY(-1px)':'';e.currentTarget.style.boxShadow=on?'var(--glow-gold)':'var(--glow-gold-sm)';},
    secondary:(e,on)=>{e.currentTarget.style.background=on?'color-mix(in oklab, var(--gold-500) 12%, transparent)':'transparent';e.currentTarget.style.borderColor=on?'var(--gold-500)':'var(--border-gold)';},
    ghost:(e,on)=>{e.currentTarget.style.background=on?'rgba(255,255,255,0.06)':'transparent';},
    dark:(e,on)=>{e.currentTarget.style.background=on?'var(--ink-800)':'var(--ink-850)';e.currentTarget.style.borderColor=on?'var(--ink-600)':'var(--ink-700)';},
    light:(e,on)=>{e.currentTarget.style.transform=on?'translateY(-1px)':'';},
  };
  const handlers=disabled?{}:{
    onMouseEnter:e=>hov[variant]?.(e,true),
    onMouseLeave:e=>hov[variant]?.(e,false),
    onMouseDown:e=>{e.currentTarget.style.transform='translateY(1px) scale(0.99)';},
    onMouseUp:e=>{e.currentTarget.style.transform=(variant==='primary'||variant==='light')?'translateY(-1px)':'';},
  };
  const Tag=href?'a':'button';
  const tp=href?{href}:{type,disabled};
  return <Tag style={{...base,...variants[variant],...style}} {...tp} {...handlers} {...rest}>
    {iconLeft&&<span style={{display:'inline-flex',flexShrink:0}}>{iconLeft}</span>}{children}
    {iconRight&&<span style={{display:'inline-flex',flexShrink:0}}>{iconRight}</span>}
  </Tag>;
}

function WaGlyph({size=20}){return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.477-.917zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z"/></svg>;}

function WhatsAppButton({ children='Cotizar por WhatsApp', phone='56912345678', message='Hola HALEX, quiero cotizar un trabajo.', size='lg', fullWidth=false, variant='solid', showIcon=true, style={}, ...rest }){
  const sizes={sm:{padding:'9px 16px',fontSize:'0.875rem',gap:'8px',icon:16},md:{padding:'14px 22px',fontSize:'0.9375rem',gap:'10px',icon:19},lg:{padding:'18px 30px',fontSize:'1.0625rem',gap:'12px',icon:22}};
  const s=sizes[size];
  const base={display:'inline-flex',alignItems:'center',justifyContent:'center',gap:s.gap,padding:s.padding,fontFamily:'var(--font-body)',fontWeight:'var(--fw-bold)',fontSize:s.fontSize,letterSpacing:'var(--ls-button)',textTransform:'uppercase',lineHeight:1,borderRadius:'var(--radius-sm)',cursor:'pointer',width:fullWidth?'100%':'auto',whiteSpace:'nowrap',transition:'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)'};
  const variants={solid:{background:'var(--whatsapp)',color:'#fff',border:'2px solid transparent',boxShadow:'var(--glow-whatsapp)'},outline:{background:'transparent',color:'var(--whatsapp)',border:'2px solid color-mix(in oklab, var(--whatsapp) 55%, transparent)'}};
  const href=`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return <a href={href} target="_blank" rel="noopener noreferrer" style={{...base,...variants[variant],...style}}
    onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-1px)';e.currentTarget.style.background=variant==='solid'?'var(--whatsapp-600)':'color-mix(in oklab, var(--whatsapp) 12%, transparent)';}}
    onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.background=variant==='solid'?'var(--whatsapp)':'transparent';}}
    onMouseDown={e=>{e.currentTarget.style.transform='translateY(1px) scale(0.99)';}}
    onMouseUp={e=>{e.currentTarget.style.transform='translateY(-1px)';}} {...rest}>
    {showIcon&&<WaGlyph size={s.icon}/>}{children}
  </a>;
}

function IconButton({ children, label, href, variant='outline', size='md', shape='circle', style={}, ...rest }){
  const dim={sm:36,md:44,lg:56}[size];
  const base={display:'inline-flex',alignItems:'center',justifyContent:'center',width:dim,height:dim,flexShrink:0,borderRadius:shape==='circle'?'999px':'var(--radius-sm)',cursor:'pointer',border:'1px solid transparent',transition:'transform var(--dur-fast) var(--ease-out), background var(--dur-base), color var(--dur-base), border-color var(--dur-base)'};
  const variants={outline:{background:'transparent',color:'var(--text-body)',borderColor:'var(--border-dark)'},solid:{background:'var(--grad-gold)',color:'var(--text-on-gold)'},ghost:{background:'rgba(255,255,255,0.04)',color:'var(--text-body)'},whatsapp:{background:'var(--whatsapp)',color:'#fff',boxShadow:'var(--glow-whatsapp)'}};
  const Tag=href?'a':'button';const tp=href?{href}:{type:'button'};
  return <Tag aria-label={label} title={label} style={{...base,...variants[variant],...style}}
    onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-1px)';if(variant==='outline'){e.currentTarget.style.borderColor='var(--border-gold)';e.currentTarget.style.color='var(--text-gold)';}else if(variant==='ghost'){e.currentTarget.style.background='rgba(255,255,255,0.08)';e.currentTarget.style.color='var(--text-gold)';}else if(variant==='whatsapp'){e.currentTarget.style.background='var(--whatsapp-600)';}}}
    onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.borderColor=variant==='outline'?'var(--border-dark)':'transparent';e.currentTarget.style.color=variants[variant].color;e.currentTarget.style.background=variants[variant].background;}} {...tp} {...rest}>{children}</Tag>;
}

function Badge({ children, variant='gold', size='md', style={}, ...rest }){
  const sizes={sm:{padding:'4px 10px',fontSize:'0.6875rem'},md:{padding:'6px 14px',fontSize:'0.75rem'}};
  const variants={gold:{background:'color-mix(in oklab, var(--gold-500) 14%, transparent)',color:'var(--gold-400)',border:'1px solid color-mix(in oklab, var(--gold-500) 35%, transparent)'},solid:{background:'var(--grad-gold)',color:'var(--text-on-gold)',border:'1px solid transparent'},dark:{background:'var(--ink-800)',color:'var(--gray-300)',border:'1px solid var(--border-dark)'},light:{background:'var(--paper-2)',color:'var(--gray-700)',border:'1px solid var(--line)'},whatsapp:{background:'color-mix(in oklab, var(--whatsapp) 16%, transparent)',color:'var(--whatsapp-600)',border:'1px solid color-mix(in oklab, var(--whatsapp) 40%, transparent)'}};
  return <span style={{display:'inline-flex',alignItems:'center',gap:'7px',borderRadius:'var(--radius-pill)',fontFamily:'var(--font-body)',fontWeight:'var(--fw-bold)',letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase',lineHeight:1,...sizes[size],...variants[variant],...style}} {...rest}>{children}</span>;
}

function SectionHeading({ eyebrow, title, intro, align='center', tone='dark', maxWidth='760px', style={} }){
  const isLight=tone==='light';
  return <div style={{display:'flex',flexDirection:'column',gap:'var(--space-5)',alignItems:align==='center'?'center':'flex-start',textAlign:align,maxWidth:align==='center'?maxWidth:'none',marginInline:align==='center'?'auto':0,...style}}>
    {eyebrow&&<Badge variant={isLight?'light':'gold'}>{eyebrow}</Badge>}
    {title&&<h2 style={{fontSize:'var(--fs-h2)',fontWeight:'var(--fw-extra)',lineHeight:'var(--lh-heading)',letterSpacing:'var(--ls-heading)',color:isLight?'var(--text-on-light)':'var(--text-strong)',textWrap:'balance',margin:0}}>{title}</h2>}
    {intro&&<p style={{fontSize:'var(--fs-lead)',lineHeight:'var(--lh-body)',color:isLight?'var(--text-body-light)':'var(--text-body)',textWrap:'pretty',maxWidth:'680px',margin:0}}>{intro}</p>}
  </div>;
}

Object.assign(window, { Button, WhatsAppButton, IconButton, Badge, SectionHeading, WaGlyph });

})();

;(function(){
/* HALEX UI Kit — content primitives & icon set (window globals). */

/* ---- Minimalist line icons (Lucide-style, 2px stroke) ---- */
const _ic = (paths, sz=24) => <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{paths}</svg>;
const Icons = {
  roof:   (s)=>_ic(<><path d="M3 11l9-7 9 7"/><path d="M5 10v9h14v-9"/><path d="M9.5 19v-4.5h5V19"/></>,s),
  drop:   (s)=>_ic(<path d="M12 3s6 6.6 6 10.5A6 6 0 1 1 6 13.5C6 9.6 12 3 12 3z"/>,s),
  roller: (s)=>_ic(<><rect x="3" y="4" width="13" height="5" rx="1"/><path d="M16 6.5h3.5a1.5 1.5 0 0 1 1.5 1.5V11a1 1 0 0 1-1 1h-7a1 1 0 0 0-1 1v2"/><rect x="9.5" y="15" width="5" height="6" rx="1"/></>,s),
  bolt:   (s)=>_ic(<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/>,s),
  tools:  (s)=>_ic(<><path d="M14.7 6.3a4 4 0 0 0-5.3 5.1L3 17.8 6.2 21l6.4-6.4a4 4 0 0 0 5.1-5.3l-2.5 2.5-2.3-.6-.6-2.3 2.4-2.6z"/><path d="m15.5 14.5 4.5 4.5"/></>,s),
  shield: (s)=>_ic(<path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"/>,s),
  star:   (s)=>_ic(<path d="M12 3l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8L6.6 19.6l1-6L3.3 9.4l6-.9z"/>,s),
  handshake:(s)=>_ic(<><path d="M11 17l2 2a1.4 1.4 0 0 0 2-2"/><path d="M13 19l2 2a1.4 1.4 0 0 0 2-2l3-3"/><path d="M3 11l4 4"/><path d="M3 7l4-2 5 5 2-1 5 4 2-1"/><path d="m20 14 1-1"/></>,s),
  user:   (s)=>_ic(<><circle cx="12" cy="8" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/></>,s),
  chat:   (s)=>_ic(<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>,s),
  search: (s)=>_ic(<><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></>,s),
  doc:    (s)=>_ic(<><path d="M14 3v5h5"/><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M9 13h6M9 17h6"/></>,s),
  calendar:(s)=>_ic(<><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/></>,s),
  clock:  (s)=>_ic(<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,s),
  phone:  (s)=>_ic(<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.8a16 16 0 0 0 6 6l1.4-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/>,s),
  mail:   (s)=>_ic(<><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7L22 6"/></>,s),
  pin:    (s)=>_ic(<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></>,s),
  arrow:  (s)=>_ic(<path d="M5 12h14M13 6l6 6-6 6"/>,s),
  check:  (s)=>_ic(<path d="M20 6 9 17l-5-5"/>,s),
  camera: (s)=>_ic(<><path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L17 6h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="13" r="3.5"/></>,s),
  ig:     (s)=>_ic(<><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none"/></>,s),
  fb:     (s)=>_ic(<path d="M15 8h-2a2 2 0 0 0-2 2v12M8 13h6" />,s),
  menu:   (s)=>_ic(<><path d="M3 6h18M3 12h18M3 18h18"/></>,s),
};

function ServiceCard({ icon, image, title, description, linkLabel, href, tone='light', style={} }){
  const isLight=tone==='light';
  const [hover,setHover]=React.useState(false);
  return <article onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{display:'flex',flexDirection:'column',borderRadius:'var(--radius-lg)',overflow:'hidden',background:isLight?'var(--surface-card-light)':'var(--surface-card)',border:`1px solid ${isLight?'var(--line)':(hover?'var(--border-dark-2)':'var(--border-dark)')}`,boxShadow:isLight?(hover?'var(--shadow-lg)':'var(--shadow-sm)'):(hover?'var(--shadow-dark-sm)':'none'),transform:hover?'translateY(-5px)':'none',transition:'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base), border-color var(--dur-base)',height:'100%',...style}}>
    <div style={{position:'relative',aspectRatio:'16 / 10',background:'linear-gradient(160deg, var(--ink-800), var(--ink-900))',overflow:'hidden'}}>
      <span aria-hidden="true" style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(circle at 1px 1px, var(--ink-700) 1px, transparent 0)',backgroundSize:'16px 16px',opacity:0.5}}/>
      {image}
    </div>
    <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)',padding:'var(--space-6)',flex:1}}>
      <span style={{width:'56px',height:'56px',display:'inline-flex',alignItems:'center',justifyContent:'center',borderRadius:'var(--radius-md)',background:'var(--grad-gold)',color:'var(--text-on-gold)',boxShadow:'var(--glow-gold-sm)',marginBottom:'var(--space-1)'}}>{icon}</span>
      <h3 style={{fontSize:'var(--fs-h4)',fontWeight:'var(--fw-bold)',color:isLight?'var(--text-on-light)':'var(--text-strong)',margin:0}}>{title}</h3>
      {description&&<p style={{fontSize:'var(--fs-sm)',lineHeight:'var(--lh-body)',color:isLight?'var(--text-body-light)':'var(--text-body)',margin:0,textWrap:'pretty'}}>{description}</p>}
      {linkLabel&&<a href={href||'#'} style={{marginTop:'auto',paddingTop:'var(--space-2)',display:'inline-flex',alignItems:'center',gap:'8px',fontFamily:'var(--font-body)',fontWeight:'var(--fw-bold)',fontSize:'var(--fs-xs)',letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase',color:'var(--text-gold)'}}>{linkLabel}<span style={{display:'inline-flex',transform:hover?'translateX(3px)':'none',transition:'transform var(--dur-base)'}}>{Icons.arrow(16)}</span></a>}
    </div>
  </article>;
}

function ValueCard({ icon, label, description, tone='dark', style={} }){
  const isLight=tone==='light';const [hover,setHover]=React.useState(false);
  return <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{display:'flex',flexDirection:'column',gap:'var(--space-4)',padding:'var(--space-6)',borderRadius:'var(--radius-md)',background:isLight?'var(--surface-card-light)':'var(--ink-850)',border:`1px solid ${hover?'var(--border-gold)':(isLight?'var(--line)':'var(--border-dark)')}`,transition:'border-color var(--dur-base), transform var(--dur-base)',transform:hover?'translateY(-3px)':'none',...style}}>
    <span style={{width:'48px',height:'48px',display:'inline-flex',alignItems:'center',justifyContent:'center',borderRadius:'var(--radius-sm)',background:'color-mix(in oklab, var(--gold-500) 14%, transparent)',border:'1px solid color-mix(in oklab, var(--gold-500) 30%, transparent)',color:'var(--gold-400)'}}>{icon}</span>
    <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
      <span style={{fontFamily:'var(--font-display)',fontWeight:'var(--fw-bold)',fontSize:'var(--fs-h4)',color:isLight?'var(--text-on-light)':'var(--text-strong)'}}>{label}</span>
      {description&&<span style={{fontSize:'var(--fs-sm)',lineHeight:'var(--lh-body)',color:isLight?'var(--text-body-light)':'var(--text-muted)'}}>{description}</span>}
    </div>
  </div>;
}

function FeatureItem({ children, title, tone='dark', style={} }){
  const isLight=tone==='light';
  return <div style={{display:'flex',alignItems:title?'flex-start':'center',gap:'var(--space-3)',...style}}>
    <span aria-hidden="true" style={{flexShrink:0,width:'28px',height:'28px',marginTop:title?'2px':0,display:'inline-flex',alignItems:'center',justifyContent:'center',borderRadius:'var(--radius-pill)',background:'color-mix(in oklab, var(--gold-500) 16%, transparent)',color:'var(--gold-400)'}}>{Icons.check(16)}</span>
    <div style={{display:'flex',flexDirection:'column',gap:'2px'}}>
      {title&&<span style={{fontFamily:'var(--font-display)',fontWeight:'var(--fw-bold)',fontSize:'var(--fs-body)',color:isLight?'var(--text-on-light)':'var(--text-strong)'}}>{title}</span>}
      <span style={{fontSize:title?'var(--fs-sm)':'var(--fs-body)',lineHeight:'var(--lh-body)',fontWeight:title?'var(--fw-regular)':'var(--fw-medium)',color:title?(isLight?'var(--text-body-light)':'var(--text-muted)'):(isLight?'var(--text-on-light)':'var(--text-body)')}}>{children}</span>
    </div>
  </div>;
}

function StepItem({ step, title, description, icon, tone='dark', style={} }){
  const isLight=tone==='light';const [hover,setHover]=React.useState(false);
  return <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{position:'relative',display:'flex',flexDirection:'column',gap:'var(--space-4)',padding:'var(--space-6)',borderRadius:'var(--radius-md)',background:isLight?'var(--surface-card-light)':'var(--ink-850)',border:`1px solid ${hover?'var(--border-gold)':(isLight?'var(--line)':'var(--border-dark)')}`,transition:'border-color var(--dur-base)',...style}}>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <span style={{fontFamily:'var(--font-display)',fontWeight:'var(--fw-black)',fontSize:'2.5rem',lineHeight:1,color:'var(--gold-500)',letterSpacing:'-0.03em'}}>{String(step).padStart(2,'0')}</span>
      {icon&&<span style={{width:'44px',height:'44px',display:'inline-flex',alignItems:'center',justifyContent:'center',borderRadius:'var(--radius-sm)',background:isLight?'var(--paper-2)':'var(--ink-800)',color:isLight?'var(--gray-700)':'var(--gray-300)'}}>{icon}</span>}
    </div>
    <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
      <h3 style={{fontSize:'var(--fs-h4)',fontWeight:'var(--fw-bold)',color:isLight?'var(--text-on-light)':'var(--text-strong)',margin:0}}>{title}</h3>
      {description&&<p style={{fontSize:'var(--fs-sm)',lineHeight:'var(--lh-body)',color:isLight?'var(--text-body-light)':'var(--text-muted)',margin:0,textWrap:'pretty'}}>{description}</p>}
    </div>
  </div>;
}

function Input({ label, id, type='text', placeholder, multiline=false, rows=4, required=false, tone='dark', icon, style={}, ...rest }){
  const isLight=tone==='light';const [focus,setFocus]=React.useState(false);
  const fieldId=id||(label?`f-${String(label).toLowerCase().replace(/\s+/g,'-')}`:undefined);
  const fs={width:'100%',fontFamily:'var(--font-body)',fontSize:'var(--fs-body)',color:isLight?'var(--text-on-light)':'var(--text-strong)',background:isLight?'var(--white)':'var(--ink-900)',border:`1.5px solid ${focus?'var(--gold-500)':(isLight?'var(--line-2)':'var(--border-dark)')}`,borderRadius:'var(--radius-sm)',padding:icon?'14px 16px 14px 44px':'14px 16px',outline:'none',boxShadow:focus?'0 0 0 3px var(--focus-ring)':'none',transition:'border-color var(--dur-base), box-shadow var(--dur-base)',resize:multiline?'vertical':'none',lineHeight:'var(--lh-body)'};
  const Tag=multiline?'textarea':'input';
  return <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)',...style}}>
    {label&&<label htmlFor={fieldId} style={{fontFamily:'var(--font-body)',fontWeight:'var(--fw-semibold)',fontSize:'var(--fs-sm)',color:isLight?'var(--text-body-light)':'var(--gray-300)'}}>{label}{required&&<span style={{color:'var(--gold-500)',marginLeft:'4px'}}>*</span>}</label>}
    <div style={{position:'relative',display:'flex'}}>
      {icon&&<span aria-hidden="true" style={{position:'absolute',left:'14px',top:multiline?'16px':'50%',transform:multiline?'none':'translateY(-50%)',color:focus?'var(--gold-500)':'var(--text-muted)',display:'inline-flex',pointerEvents:'none',transition:'color var(--dur-base)'}}>{icon}</span>}
      <Tag id={fieldId} type={multiline?undefined:type} placeholder={placeholder} required={required} rows={multiline?rows:undefined} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} style={fs} {...rest}/>
    </div>
  </div>;
}

Object.assign(window, { Icons, ServiceCard, ValueCard, FeatureItem, StepItem, Input });

})();

;(function(){
/* HALEX landing — sections (composes kit primitives, all global from kit*.jsx). */
const PHONE = '56962183204';
const IG = 'https://www.instagram.com/halex.cl';
const FB = 'https://web.facebook.com/profile.php?id=61593272812619';

/* Auto-rotating hero carousel — fades through the 4 work photos. */
function HeroCarousel({ images, interval=4200 }){
  const [i,setI]=React.useState(0);
  React.useEffect(()=>{
    const id=setInterval(()=>setI(p=>(p+1)%images.length),interval);
    return ()=>clearInterval(id);
  },[images.length,interval]);
  return (
    <div style={{position:'absolute',inset:0}}>
      {images.map((src,idx)=>(
        <div key={src} aria-hidden={idx!==i} style={{position:'absolute',inset:0,backgroundImage:`url("${src}")`,backgroundSize:'cover',backgroundPosition:'center',opacity:idx===i?1:0,transform:idx===i?'scale(1.04)':'scale(1)',transition:'opacity 1100ms var(--ease-out), transform 5200ms linear'}}/>
      ))}
      {/* progress dots */}
      <div style={{position:'absolute',top:'16px',right:'16px',display:'flex',gap:'6px',zIndex:3}}>
        {images.map((_,idx)=>(
          <button key={idx} onClick={()=>setI(idx)} aria-label={`Foto ${idx+1}`} style={{width:idx===i?'22px':'8px',height:'8px',borderRadius:'999px',border:'none',cursor:'pointer',padding:0,background:idx===i?'var(--gold-500)':'rgba(255,255,255,0.45)',transition:'width var(--dur-base) var(--ease-out), background var(--dur-base)'}}/>
        ))}
      </div>
    </div>
  );
}

/* Scroll-triggered fade-in + slide-up animation */
function useFadeInOnScroll(){
  const ref=React.useRef(null);
  const [visible,setVisible]=React.useState(false);
  React.useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{ if(e.isIntersecting) setVisible(true); },{threshold:0.1});
    if(ref.current) obs.observe(ref.current);
    return ()=>obs.disconnect();
  },[]);
  return [ref, visible];
}
const Container = ({ children, narrow=false, className='', style={} }) =>
  <div className={className} style={{ width:'100%', maxWidth: narrow?'var(--container-narrow)':'var(--container)', marginInline:'auto', paddingInline:'var(--gutter)', ...style }}>{children}</div>;
const Section = ({ children, bg='var(--surface-page)', id, style={} }) =>
  <section id={id} style={{ background:bg, paddingBlock:'var(--section-y)', ...style }}>{children}</section>;

/* ---------------- NAV ---------------- */
function Nav(){
  const [open,setOpen]=React.useState(false);
  const links=[['Inicio','#hero'],['Servicios','#servicios'],['Nosotros','#nosotros'],['Cómo trabajamos','#proceso'],['Contacto','https://halex.cl/contacto/']];
  return (
    <header style={{position:'sticky',top:0,zIndex:50}}>
      {/* utility bar */}
      <div style={{background:'var(--ink-900)',borderBottom:'1px solid var(--border-dark)'}}>
        <Container style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:'40px',gap:'16px'}}>
          <div style={{display:'flex',alignItems:'center',gap:'20px',color:'var(--gray-400)',fontSize:'13px',fontWeight:600}}>
            <span style={{display:'inline-flex',alignItems:'center',gap:'8px'}}>{Icons.phone(15)} +56 9 6218 3204</span>
            <span style={{display:'inline-flex',alignItems:'center',gap:'8px'}} className="util-hide">{Icons.clock(15)} Lun a Sáb · 9:00 – 19:00</span>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'14px',color:'var(--gray-400)'}}>
            <a href={IG} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{color:'inherit'}}>{Icons.ig(17)}</a>
            <a href={FB} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{color:'inherit'}}>{Icons.fb(17)}</a>
          </div>
        </Container>
      </div>
      {/* main bar */}
      <div style={{background:'color-mix(in oklab, var(--ink-950) 86%, transparent)',backdropFilter:'blur(12px)',borderBottom:'1px solid var(--border-dark)'}}>
        <Container style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:'92px',gap:'24px'}}>
          <a href="#hero" style={{display:'flex',alignItems:'center'}}><img src="/assets/halex-logo.png" alt="HALEX" className="nav-logo" style={{width:'140px',height:'auto',display:'block'}}/></a>
          <nav className="nav-links" style={{display:'flex',alignItems:'center',gap:'30px'}}>
            {links.map(([l,h])=>(
              <a key={l} href={h} className="navlink" style={{fontFamily:'var(--font-body)',fontWeight:600,fontSize:'15px',color:'var(--gray-300)',transition:'color var(--dur-base)'}}>{l}</a>
            ))}
          </nav>
          <div className="nav-cta" style={{display:'flex',alignItems:'center',gap:'12px'}}>
            <WhatsAppButton size="sm" phone={PHONE} message="Hola HALEX, quiero cotizar un trabajo.">Cotizar</WhatsAppButton>
          </div>
          <button className="nav-burger" onClick={()=>setOpen(o=>!o)} aria-label="Menú" style={{display:'none',background:'none',border:'none',color:'var(--white)',cursor:'pointer'}}>{Icons.menu(26)}</button>
        </Container>
        {open&&(
          <div className="nav-mobile" style={{borderTop:'1px solid var(--border-dark)',background:'var(--ink-950)'}}>
            <Container style={{display:'flex',flexDirection:'column',gap:'4px',paddingBlock:'12px'}}>
              {links.map(([l,h])=>(<a key={l} href={h} onClick={()=>setOpen(false)} style={{padding:'12px 4px',color:'var(--gray-200)',fontWeight:600,borderBottom:'1px solid var(--ink-800)'}}>{l}</a>))}
              <div style={{paddingTop:'10px'}}><WhatsAppButton size="md" fullWidth phone={PHONE}>Cotizar por WhatsApp</WhatsAppButton></div>
            </Container>
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero(){
  return (
    <section id="hero" style={{position:'relative',background:'var(--ink-950)',overflow:'hidden'}}>
      {/* subtle dotted texture + gold radial */}
      <div aria-hidden="true" style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.035) 1px, transparent 0)',backgroundSize:'22px 22px'}}/>
      <div aria-hidden="true" style={{position:'absolute',top:'-20%',right:'-10%',width:'620px',height:'620px',background:'radial-gradient(circle, color-mix(in oklab, var(--gold-500) 16%, transparent), transparent 65%)',filter:'blur(10px)',pointerEvents:'none'}}/>
      <Container className="hero-grid" style={{position:'relative',display:'grid',gridTemplateColumns:'1.05fr 0.95fr',gap:'56px',alignItems:'center',paddingBlock:'clamp(56px,7vw,104px)'}} >
        <div className="hero-copy" style={{display:'flex',flexDirection:'column',gap:'var(--space-6)',maxWidth:'600px'}}>
          <Badge variant="gold">Obras menores · Construcción y servicios</Badge>
          <h1 style={{fontFamily:'var(--font-display)',fontWeight:900,fontSize:'var(--fs-display)',lineHeight:'var(--lh-tight)',letterSpacing:'var(--ls-display)',color:'var(--white)',textTransform:'uppercase',margin:0,textWrap:'balance'}}>
            Soluciones <span style={{color:'var(--gold-500)'}}>reales</span> para tu hogar o negocio
          </h1>
          <p style={{fontSize:'var(--fs-lead)',lineHeight:'var(--lh-body)',color:'var(--text-body)',margin:0,maxWidth:'520px',textWrap:'pretty'}}>
            Reparaciones, mantenciones y mejoras hechas con responsabilidad, calidad y compromiso. Un solo equipo para muchas soluciones.
          </p>
          <div style={{display:'flex',gap:'14px',flexWrap:'wrap',marginTop:'var(--space-2)'}}>
            <WhatsAppButton size="lg" phone={PHONE} message="Hola HALEX, quiero cotizar un trabajo.">Cotizar por WhatsApp</WhatsAppButton>
            <Button variant="secondary" size="lg" href="#servicios" iconRight={Icons.arrow(18)}>Ver servicios</Button>
          </div>
        </div>
        {/* hero media */}
        <div className="hero-media" style={{position:'relative'}}>
          <div style={{position:'relative',borderRadius:'var(--radius-xl)',overflow:'hidden',border:'1px solid var(--border-dark)',boxShadow:'var(--shadow-dark)',aspectRatio:'4 / 5'}}>
            <HeroCarousel images={['/assets/hero-equipo.jpg','/assets/hero-inspeccion.jpg']}/>
            <div aria-hidden="true" style={{position:'absolute',inset:0,background:'var(--scrim-bottom)',pointerEvents:'none'}}/>
            <div style={{position:'absolute',left:'20px',bottom:'20px',right:'20px',display:'flex',alignItems:'center',gap:'12px'}}>
              <span style={{width:'46px',height:'46px',borderRadius:'var(--radius-sm)',background:'var(--grad-gold)',color:'var(--ink-950)',display:'inline-flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>{Icons.shield(24)}</span>
              <div>
                <div style={{fontFamily:'var(--font-display)',fontWeight:800,color:'var(--white)',fontSize:'16px'}}>Trabajo garantizado</div>
                <div style={{fontSize:'13px',color:'var(--gray-300)'}}>Hogares y negocios</div>
              </div>
            </div>
          </div>
          {/* floating badge */}
          <div style={{position:'absolute',top:'-18px',left:'-18px',background:'var(--ink-850)',border:'1px solid var(--border-dark)',borderRadius:'var(--radius-md)',padding:'12px 16px',display:'flex',alignItems:'center',gap:'10px',boxShadow:'var(--shadow-dark-sm)'}} className="hero-float">
            <span style={{color:'var(--whatsapp)'}}><WaGlyph size={22}/></span>
            <div style={{fontSize:'13px',color:'var(--gray-300)',fontWeight:600,lineHeight:1.3}}>Cotiza por<br/><span style={{color:'var(--white)'}}>WhatsApp</span></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
window.HalexNav = Nav; window.HalexHero = Hero; window.HalexUI = { Container, Section, PHONE, IG, FB };

})();

;(function(){
/* HALEX landing — sections (Quiénes somos → Footer) + App.
   Container/Section/WaGlyph and all kit primitives are globals from prior scripts. */
const _k = window;
const WA = window.HalexUI.PHONE;
const IG = window.HalexUI.IG;
const FB = window.HalexUI.FB;
const EMAIL = 'contacto@halex.cl';

/* Scroll-triggered fade-in + slide-up animation */
function useFadeInOnScroll(){
  const ref=React.useRef(null);
  const [visible,setVisible]=React.useState(false);
  React.useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{ if(e.isIntersecting) setVisible(true); },{threshold:0.1});
    if(ref.current) obs.observe(ref.current);
    return ()=>obs.disconnect();
  },[]);
  return [ref, visible];
}

/* AnimatedDiv wrapper */
function AnimatedDiv({children}){
  const [ref,vis]=useFadeInOnScroll();
  return React.createElement('div',{ref,style:{opacity:vis?1:0.2,transform:vis?'translateY(0)':'translateY(30px)',transition:'opacity 800ms var(--ease-out), transform 800ms var(--ease-out)'}},children);
}

/* QUIÉNES SOMOS */
function Nosotros(){
  const values=[
    [_k.Icons.shield, 'Responsabilidad', 'Cumplimos plazos y dejamos cada espacio limpio.'],
    [_k.Icons.star, 'Calidad', 'Trabajo prolijo y materiales de primera.'],
    [_k.Icons.handshake, 'Compromiso', 'Nos hacemos cargo hasta dejarlo bien.'],
    [_k.Icons.user, 'Atención personalizada', 'Te asesoramos según lo que realmente necesitas.'],
  ];
  return React.createElement(AnimatedDiv,null,
    React.createElement(window.HalexUI.Section,{id:'nosotros',bg:'var(--ink-950)'},
      React.createElement(window.HalexUI.Container,{className:'nos-grid',style:{display:'grid',gridTemplateColumns:'0.9fr 1.1fr',gap:'56px',alignItems:'center'}},
        React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:'var(--space-5)'}},
          React.createElement(_k.Badge,{variant:'gold'},'Quiénes somos'),
          React.createElement('h2',{style:{fontSize:'var(--fs-h2)',fontWeight:800,color:'var(--white)',margin:0,textWrap:'balance'}},'Un equipo de confianza para tus obras menores'),
          React.createElement('p',{style:{fontSize:'var(--fs-lead)',lineHeight:'var(--lh-body)',color:'var(--text-body)',margin:0,textWrap:'pretty'}},'En HALEX nos especializamos en reparaciones, mantenciones y mejoras para casas, departamentos y locales comerciales. Resolvemos los problemas que te quitan tranquilidad, con un servicio cercano y resultados que perduran.'),
          React.createElement('p',{style:{fontSize:'var(--fs-body)',lineHeight:'var(--lh-body)',color:'var(--text-muted)',margin:0}},'Trabajamos para que tengas una sola coordinación y una sola garantía, sin vueltas ni sorpresas.'),
          React.createElement('div',{style:{marginTop:'var(--space-2)'}},
            React.createElement(_k.WhatsAppButton,{size:'md',variant:'outline',phone:WA,message:'Hola HALEX, quiero conversar sobre un trabajo.'},'Conversemos por WhatsApp')
          )
        ),
        React.createElement('div',{className:'val-grid',style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}},
          values.map(([ic,l,d])=>React.createElement(_k.ValueCard,{key:l,icon:ic(24),label:l,description:d}))
        )
      )
    )
  );
}

/* SERVICIOS */
function Servicios(){
  const svc=[
    [_k.Icons.roof,'Techumbres y goteras','Detección de filtraciones, cambio de planchas, sellado de techumbres y limpieza de canaletas.','/assets/service-roof.jpg'],
    [_k.Icons.drop,'Gasfitería','Instalación y reparación de llaves, WC, lavamanos, destapes y reparación de cañerías.','/assets/service-plumbing.jpg'],
    [_k.Icons.roller,'Pintura interior y exterior','Pintura de muros, fachadas, rejas y portones, con preparación y terminación profesional.','/assets/service-paint.jpg'],
    [_k.Icons.bolt,'Electricidad menor','Cambio de enchufes, interruptores, luminarias y soluciones eléctricas seguras.','/assets/service-electrical.jpg'],
    [_k.Icons.tools,'Mantenciones generales','Mantención preventiva y arreglos prácticos para tu hogar, oficina o local comercial.','/assets/service-maintenance.jpg'],
  ];
  return React.createElement(AnimatedDiv,null,
    React.createElement(window.HalexUI.Section,{id:'servicios',bg:'var(--paper)'},
      React.createElement(window.HalexUI.Container,null,
        React.createElement(_k.SectionHeading,{tone:'light',eyebrow:'Nuestros servicios',title:'Un solo equipo, muchas soluciones',intro:'Cubrimos las reparaciones y mantenciones más frecuentes en casas y negocios. Cotiza el servicio que necesitas y coordinamos el resto.'}),
        React.createElement('div',{className:'svc-grid',style:{display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:'22px',marginTop:'var(--space-12)'}},
          svc.map(([ic,t,d,img])=>React.createElement(_k.ServiceCard,{key:t,tone:'light',icon:ic(26),image:React.createElement('div',{style:{position:'absolute',inset:0,backgroundImage:`url("${img}")`,backgroundSize:'cover',backgroundPosition:'center'}}),title:t,description:d,linkLabel:'Cotizar',href:`https://wa.me/${WA}?text=`+encodeURIComponent('Hola HALEX, quiero cotizar: '+t)}))
        )
      )
    )
  );
}

/* ¿POR QUÉ ELEGIR? */
function PorQue(){
  const feats=[
    ['Atención rápida','Respondemos el mismo día y coordinamos pronto.'],
    ['Presupuesto sin compromiso','Te cotizamos antes de empezar, sin costos ocultos.'],
    ['Soluciones duraderas','Reparaciones bien hechas que no vuelves a sufrir.'],
    ['Trabajo garantizado','Respaldamos cada trabajo que entregamos.'],
    ['Hogares y empresas','Servicio para casas, departamentos y locales comerciales.'],
  ];
  return React.createElement(AnimatedDiv,null,
    React.createElement(window.HalexUI.Section,{bg:'var(--ink-900)'},
      React.createElement(window.HalexUI.Container,{className:'pq-grid',style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'56px',alignItems:'center'}},
        React.createElement('div',{className:'pq-media',style:{position:'relative',borderRadius:'var(--radius-xl)',overflow:'hidden',border:'1px solid var(--border-dark)',boxShadow:'var(--shadow-dark)',aspectRatio:'5 / 4'}},
          React.createElement('div',{style:{position:'absolute',inset:0,backgroundImage:'url("/assets/porque-paneles.jpg")',backgroundSize:'cover',backgroundPosition:'center'}}),
          React.createElement('div',{'aria-hidden':true,style:{position:'absolute',inset:0,background:'var(--scrim-bottom)',pointerEvents:'none'}}),
          React.createElement('div',{style:{position:'absolute',left:'22px',bottom:'22px',display:'flex',gap:'10px',alignItems:'center'}},
            React.createElement('span',{style:{width:'44px',height:'44px',borderRadius:'999px',background:'color-mix(in oklab, var(--gold-500) 90%, white)',color:'var(--ink-950)',display:'inline-flex',alignItems:'center',justifyContent:'center'}},_k.Icons.check(24)),
            React.createElement('span',{style:{fontFamily:'var(--font-display)',fontWeight:800,color:'var(--white)',fontSize:'17px'}},'Resultados que se notan')
          )
        ),
        React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:'var(--space-6)'}},
          React.createElement(_k.SectionHeading,{tone:'dark',align:'left',eyebrow:'¿Por qué elegir HALEX?',title:'Confianza, rapidez y trabajo bien hecho'}),
          React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:'var(--space-4)'}},
            feats.map(([t,d])=>React.createElement(_k.FeatureItem,{key:t,title:t},d))
          )
        )
      )
    )
  );
}

/* CÓMO TRABAJAMOS */
function Proceso(){
  const steps=[
    [1,_k.Icons.chat,'Nos escribes','Cuéntanos qué necesitas por WhatsApp y envíanos fotos o videos.'],
    [2,_k.Icons.search,'Revisamos el trabajo','Evaluamos el problema y definimos la mejor solución.'],
    [3,_k.Icons.doc,'Enviamos cotización','Te entregamos un presupuesto claro y sin compromiso.'],
    [4,_k.Icons.calendar,'Coordinamos y ejecutamos','Agendamos, ejecutamos y dejamos todo funcionando.'],
  ];
  return React.createElement(AnimatedDiv,null,
    React.createElement(window.HalexUI.Section,{id:'proceso',bg:'var(--ink-950)'},
      React.createElement(window.HalexUI.Container,null,
        React.createElement(_k.SectionHeading,{tone:'dark',eyebrow:'Cómo trabajamos',title:'Cotizar con HALEX es fácil',intro:'Un proceso simple y directo, pensado para resolverte rápido y sin complicaciones.'}),
        React.createElement('div',{className:'step-grid',style:{display:'grid',gridTemplateColumns:'repeat(4, 1fr)',gap:'18px',marginTop:'var(--space-12)'}},
          steps.map(([n,ic,t,d])=>React.createElement(_k.StepItem,{key:n,step:n,icon:ic(22),title:t,description:d}))
        ),
        React.createElement('div',{style:{display:'flex',justifyContent:'center',marginTop:'var(--space-10)'}},
          React.createElement(_k.WhatsAppButton,{size:'lg',phone:WA,message:'Hola HALEX, quiero iniciar una cotización.'},'Iniciar mi cotización')
        )
      )
    )
  );
}

/* TRABAJOS REALES */
const TRABAJOS=[
  {
    id:'canaletas',
    tab:'Limpieza de canaletas',
    servicio:'Mantenciones · Techumbres',
    titulo:'Limpieza de canaletas y sellado impermeabilizante',
    intro:'Canaleta obstruida con tierra, hojas y raíces que provocaba desborde hacia la techumbre. Se retiró todo el material acumulado, se trató el óxido y se aplicó sellado impermeabilizante en el canal y en la pasada del bajante.',
    datos:[['Servicio','Limpieza y sellado de canaletas'],['Lugar','Santiago']],
    fotos:[
      ['/assets/trabajos/canaleta-despues.jpeg','Antes — canaleta obstruida con tierra y hojas','Antes',false],
      ['/assets/trabajos/canaleta-sello.jpeg','Proceso — sellado de la pasada del bajante','Proceso',false],
      ['/assets/trabajos/canaleta-antes.jpeg','Después — canal limpio y sellado','Después',true],
      ['/assets/trabajos/canaleta-vista.jpeg','Después — cubierta despejada y drenaje libre','Después',true],
    ],
    videos:['/assets/trabajos/video-canaleta-1.mp4','/assets/trabajos/video-canaleta-2.mp4'],
  },
  {
    id:'ducto',
    tab:'Sellado de ducto',
    servicio:'Techumbres y goteras',
    titulo:'Reparación y sellado de pasada de ducto',
    intro:'Sello viejo agrietado en la pasada del ducto, con filtración hacia el interior. Se retiró el sello deteriorado y se instaló una base nueva impermeabilizada sobre la techumbre asfáltica.',
    datos:[['Servicio','Techumbres y goteras'],['Lugar','Santiago']],
    fotos:[
      ['/assets/trabajos/ducto-antes-1.jpeg','Antes — techumbre con sello deteriorado','Antes',false],
      ['/assets/trabajos/ducto-antes-2.jpeg','Antes — gorro y sello agrietado','Antes',false],
      ['/assets/trabajos/ducto-proceso.jpeg','Proceso — base nueva impermeabilizada','Proceso',false],
      ['/assets/trabajos/ducto-despues.jpeg','Después — ducto instalado y sellado','Después',true],
    ],
    videos:['/assets/trabajos/video-techumbre-1.mp4','/assets/trabajos/video-techumbre-2.mp4'],
  },
  {
    id:'cobertizo',
    tab:'Cobertizo en terraza',
    servicio:'Mantenciones · Pintura',
    titulo:'Cobertizo con cielo de madera y canaletas',
    intro:'Estructura metálica de cobertizo sobre terraza, sin terminaciones. Se instaló el cielo de madera machihembrada, se barnizó, se montaron las canaletas con bajante y se pintó el muro. La terraza quedó cubierta y protegida de la lluvia.',
    datos:[['Servicio','Cobertizo y terminaciones'],['Lugar','Santiago']],
    fotos:[
      ['/assets/trabajos/cobertizo-antes.jpeg','Antes — estructura metálica sin terminaciones','Antes',false],
      ['/assets/trabajos/cobertizo-despues-1.jpeg','Proceso — cielo de madera montado sobre las vigas','Proceso',false],
      ['/assets/trabajos/cobertizo-proceso.jpeg','Después — cielo barnizado y canaletas instaladas','Después',true],
      ['/assets/trabajos/cobertizo-despues-2.jpeg','Después — terraza cubierta y terminada','Después',true],
    ],
    videos:[],
  },
];

function TrabajosReales(){
  const [open,setOpen]=React.useState(false);
  const [activo,setActivo]=React.useState(0);
  const t=TRABAJOS[activo];
  return React.createElement(AnimatedDiv,null,
    React.createElement(window.HalexUI.Section,{id:'trabajos',bg:'var(--ink-950)'},
      React.createElement(window.HalexUI.Container,null,
        React.createElement('button',{className:'tr-toggle',id:'trToggle','aria-expanded':open?'true':'false','aria-controls':'trPanel',onClick:()=>setOpen(o=>!o)},
          React.createElement('span',{className:'tr-toggle-text'},
            React.createElement('span',{className:'tr-eyebrow'},'Trabajos'),
            React.createElement('span',{className:'tr-title'},'Trabajos reales, registrados en obra'),
            React.createElement('span',{className:'tr-hint'},TRABAJOS.length+' trabajos · fotos y videos de obra')
          ),
          React.createElement('span',{className:'tr-chevron','aria-hidden':'true'},
            React.createElement('span',{className:'tr-wave'}),
            React.createElement('span',{className:'tr-wave tr-wave--2'}),
            React.createElement('span',{className:'tr-arrow'},'→')
          )
        ),
        React.createElement('div',{className:'tr-panel'+(open?'':' collapsed'),id:'trPanel'},
          React.createElement('div',null,
            React.createElement('div',{className:'tr-tabs',role:'tablist'},
              TRABAJOS.map((x,i)=>
                React.createElement('button',{key:x.id,type:'button',role:'tab','aria-selected':i===activo,className:'tr-tab'+(i===activo?' is-active':''),onClick:()=>setActivo(i)},
                  React.createElement('span',{className:'tr-tab-n'},String(i+1).padStart(2,'0')),
                  x.tab
                )
              )
            ),
            React.createElement('div',{className:'tr-case',key:t.id},
              React.createElement('div',{className:'tr-case-head'},
                React.createElement('div',null,
                  React.createElement('span',{className:'tr-case-svc'},t.servicio),
                  React.createElement('h3',{className:'tr-case-title'},t.titulo),
                  React.createElement('p',{className:'tr-intro'},t.intro)
                ),
                React.createElement('dl',{className:'tr-meta'},
                  t.datos.map(([k,v])=>React.createElement(React.Fragment,{key:k},
                    React.createElement('dt',null,k),
                    React.createElement('dd',null,v)
                  ))
                )
              ),
              React.createElement('div',{className:'tr-grid'},
                t.fotos.map(([src,alt,tag,after])=>
                  React.createElement('figure',{key:src,className:'tr-item'},
                    React.createElement('img',{src,alt,loading:'lazy'}),
                    React.createElement('figcaption',{className:'tr-tag'+(after?' tr-tag--after':'')},tag)
                  )
                )
              ),
              t.videos.length>0 && React.createElement('div',{className:'tr-videos'},
                t.videos.map(src=>
                  React.createElement('figure',{key:src,className:'tr-video'},
                    React.createElement('video',{src,controls:true,preload:'metadata',playsInline:true})
                  )
                )
              ),
              React.createElement('div',{className:'tr-foot'},
                React.createElement('p',{className:'tr-note'},'✓ Registro propio de obra · Santiago y alrededores'),
                React.createElement(_k.WhatsAppButton,{size:'md',phone:WA,message:'Hola HALEX, vi sus trabajos y quiero cotizar uno similar.'},'Cotizar un trabajo similar')
              )
            )
          )
        )
      )
    )
  );
}

/* GALERÍA */
function Galeria(){
  const projects=[
    ['Techumbre recuperada','Limpieza, sellado y pintura de cubierta','/assets/ayd-techumbre.jpg'],
    ['Baño renovado','Gasfitería, revestimientos y terminaciones','/assets/ayd-bano.jpg'],
    ['Fachada pintada','Preparación, pintura y detalles exteriores','/assets/ayd-fachada.jpg'],
  ];
  return React.createElement(AnimatedDiv,null,
    React.createElement(window.HalexUI.Section,{bg:'var(--ink-900)'},
      React.createElement(window.HalexUI.Container,null,
        React.createElement(_k.SectionHeading,{tone:'dark',eyebrow:'Antes y después',title:'El cambio se ve',intro:'Resultados de techumbre, baño y fachada.'}),
        React.createElement('div',{className:'gal-grid',style:{display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:'22px',marginTop:'var(--space-12)'}},
          projects.map(([t,d,img])=>
            React.createElement('figure',{key:t,style:{margin:0,borderRadius:'var(--radius-lg)',overflow:'hidden',border:'1px solid var(--border-dark)',background:'var(--ink-850)'}},
              React.createElement('img',{src:img,alt:t+' — antes y después',loading:'lazy',style:{width:'100%',display:'block',aspectRatio:'4 / 3',objectFit:'cover'}}),
              React.createElement('figcaption',{style:{padding:'var(--space-5) var(--space-6)',display:'flex',flexDirection:'column',gap:'2px'}},
                React.createElement('strong',{style:{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'17px',color:'var(--white)'}},t),
                React.createElement('span',{style:{fontSize:'14px',color:'var(--text-muted)'}},d)
              )
            )
          )
        )
      )
    )
  );
}

/* CONTACTO */
function Contacto(){
  const info=[
    [_k.Icons.phone,'Teléfono','+56 9 6218 3204'],
    [_k.Icons.mail,'Correo','contacto@halex.cl'],
    [_k.Icons.clock,'Horario','Lun a Sáb · 9:00 – 19:00'],
    [_k.Icons.pin,'Cobertura','Santiago y alrededores'],
  ];
  const submit=(e)=>{ e.preventDefault();
    const f=e.target; const msg=`Hola HALEX, soy ${f.nombre.value||'(sin nombre)'}.%0ATeléfono: ${f.telefono.value||'-'}%0ACorreo: ${f.correo.value||'-'}%0ATrabajo: ${f.detalle.value||'-'}`;
    window.open(`https://wa.me/${WA}?text=${msg}`,'_blank');
  };
  const mailSubmit=(e)=>{
    if(window.halexConv) window.halexConv('correo');
    const f=e.target.closest('form');
    const body=`Nombre: ${f.nombre.value||'-'}\nTeléfono: ${f.telefono.value||'-'}\nCorreo: ${f.correo.value||'-'}\n\nDescripción del trabajo:\n${f.detalle.value||'-'}`;
    window.location.href=`mailto:${EMAIL}?subject=`+encodeURIComponent('Solicitud de cotización — HALEX')+'&body='+encodeURIComponent(body);
  };
  return React.createElement(AnimatedDiv,null,
    React.createElement(window.HalexUI.Section,{id:'contacto',bg:'var(--paper)'},
      React.createElement(window.HalexUI.Container,{className:'con-grid',style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'48px',alignItems:'stretch'}},
        React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:'var(--space-6)'}},
          React.createElement(_k.SectionHeading,{tone:'light',align:'left',eyebrow:'Contacto',title:'Cuéntanos qué necesitas',intro:'Completa el formulario y te enviamos tu cotización sin compromiso.'}),
          React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:'var(--space-4)'}},
            info.map(([ic,l,v])=>
              React.createElement('div',{key:l,style:{display:'flex',alignItems:'center',gap:'14px'}},
                React.createElement('span',{style:{width:'46px',height:'46px',flexShrink:0,borderRadius:'var(--radius-sm)',background:'var(--white)',border:'1px solid var(--line)',display:'inline-flex',alignItems:'center',justifyContent:'center',color:'var(--gold-700)'}},ic(22)),
                React.createElement('div',null,
                  React.createElement('div',{style:{fontSize:'12px',letterSpacing:'.1em',textTransform:'uppercase',fontWeight:700,color:'var(--text-muted-light)'}},l),
                  React.createElement('div',{style:{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'17px',color:'var(--text-on-light)'}},v)
                )
              )
            )
          )
        ),
        React.createElement('form',{onSubmit:submit,style:{display:'flex',flexDirection:'column',gap:'var(--space-4)',background:'var(--white)',border:'1px solid var(--line)',borderRadius:'var(--radius-xl)',padding:'clamp(24px,3vw,40px)',boxShadow:'var(--shadow-lg)'}},
          React.createElement('div',{className:'form-row',style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-4)'}},
            React.createElement(_k.Input,{tone:'light',name:'nombre',label:'Nombre',placeholder:'Tu nombre',required:true}),
            React.createElement(_k.Input,{tone:'light',name:'telefono',label:'Teléfono',type:'tel',placeholder:'+56 9 ...',icon:_k.Icons.phone(18),required:true})
          ),
          React.createElement(_k.Input,{tone:'light',name:'correo',label:'Correo',type:'email',placeholder:'tucorreo@mail.com',icon:_k.Icons.mail(18)}),
          React.createElement(_k.Input,{tone:'light',name:'detalle',label:'Descripción del trabajo',multiline:true,rows:4,placeholder:'Cuéntanos qué necesitas reparar o mejorar...'}),
          React.createElement(_k.Button,{size:'lg',fullWidth:true,variant:'primary',type:'button',onClick:mailSubmit},'Enviar por correo'),
          React.createElement('p',{style:{fontSize:'13px',color:'var(--text-muted-light)',textAlign:'center',margin:0}},'Respuesta rápida y confiable · Sin compromiso')
        )
      )
    )
  );
}

/* FOOTER */
function Footer(){
  const cols=[
    ['Servicios',['Techumbres y goteras','Gasfitería','Pintura','Electricidad menor','Mantenciones']],
    ['Empresa',['Quiénes somos','Cómo trabajamos','Galería','Contacto']],
  ];
  return React.createElement('footer',{style:{background:'var(--ink-950)',borderTop:'1px solid var(--border-dark)',paddingTop:'var(--section-y-sm)'}},
    React.createElement(window.HalexUI.Container,null,
      React.createElement('div',{className:'foot-grid',style:{display:'grid',gridTemplateColumns:'1.4fr 1fr 1fr 1.2fr',gap:'40px'}},
        React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:'var(--space-4)',maxWidth:'300px'}},
          React.createElement('img',{src:'/assets/halex-logo.png',alt:'HALEX',style:{width:'200px',maxWidth:'100%',height:'auto',display:'block'}}),
          React.createElement('p',{style:{fontSize:'14px',color:'var(--text-muted)',lineHeight:'var(--lh-body)',margin:0}},'Obras menores en construcción y servicios. Soluciones reales para tu hogar o negocio.'),
          React.createElement('div',{style:{display:'flex',gap:'10px'}},
            React.createElement(_k.IconButton,{label:'Instagram',variant:'outline',size:'sm',href:IG},_k.Icons.ig(17)),
            React.createElement(_k.IconButton,{label:'Facebook',variant:'outline',size:'sm',href:FB},_k.Icons.fb(17)),
            React.createElement(_k.IconButton,{label:'WhatsApp',variant:'whatsapp',size:'sm',href:`https://wa.me/${WA}`},React.createElement(_k.WaGlyph,{size:17}))
          )
        ),
        cols.map(([h,items])=>
          React.createElement('div',{key:h,style:{display:'flex',flexDirection:'column',gap:'var(--space-3)'}},
            React.createElement('div',{style:{fontFamily:'var(--font-body)',fontWeight:700,fontSize:'12px',letterSpacing:'.16em',textTransform:'uppercase',color:'var(--gold-500)'}},h),
            items.map(i=>React.createElement('a',{key:i,href:'#',style:{fontSize:'14px',color:'var(--text-muted)'}},i))
          )
        ),
        React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:'var(--space-3)'}},
          React.createElement('div',{style:{fontFamily:'var(--font-body)',fontWeight:700,fontSize:'12px',letterSpacing:'.16em',textTransform:'uppercase',color:'var(--gold-500)'}},'Contacto'),
          React.createElement('span',{style:{display:'inline-flex',alignItems:'center',gap:'8px',fontSize:'14px',color:'var(--text-body)'}},_k.Icons.phone(16),' +56 9 6218 3204'),
          React.createElement('span',{style:{display:'inline-flex',alignItems:'center',gap:'8px',fontSize:'14px',color:'var(--text-body)'}},_k.Icons.mail(16),' contacto@halex.cl'),
          React.createElement('span',{style:{display:'inline-flex',alignItems:'center',gap:'8px',fontSize:'14px',color:'var(--text-body)'}},_k.Icons.clock(16),' Lun a Sáb · 9:00–19:00')
        )
      ),
      React.createElement('div',{className:'foot-bottom',style:{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'16px',flexWrap:'wrap',marginTop:'var(--section-y-sm)',paddingBlock:'var(--space-6)',borderTop:'1px solid var(--border-dark)'}},
        React.createElement('span',{style:{fontSize:'13px',color:'var(--text-muted)'}},'© 2026 HALEX · Obras menores en construcción y servicios'),
        React.createElement('span',{style:{fontSize:'13px',color:'var(--text-muted)'}},'Hecho con compromiso en Chile')
      )
    )
  );
}

/* FLOATING WHATSAPP */
function FloatingWa(){
  return React.createElement('a',{href:`https://wa.me/${WA}?text=`+encodeURIComponent('Hola HALEX, quiero cotizar un trabajo.'),target:'_blank',rel:'noopener noreferrer','aria-label':'Cotizar por WhatsApp',style:{position:'fixed',right:'22px',bottom:'22px',zIndex:60,display:'inline-flex',alignItems:'center',gap:'10px',padding:'14px 20px',borderRadius:'999px',background:'var(--whatsapp)',color:'#fff',fontFamily:'var(--font-body)',fontWeight:700,fontSize:'15px',boxShadow:'var(--glow-whatsapp), var(--shadow-dark-sm)',transition:'transform var(--dur-base)'},onMouseEnter:e=>{e.currentTarget.style.transform='translateY(-2px)';},onMouseLeave:e=>{e.currentTarget.style.transform='';}},
    React.createElement(_k.WaGlyph,{size:24}),
    React.createElement('span',{className:'fab-label'},'Cotizar')
  );
}

function App(){
  return React.createElement(React.Fragment,null,
    React.createElement(window.HalexNav),
    React.createElement('main',null,
      React.createElement(window.HalexHero),
      React.createElement(Nosotros),
      React.createElement(Servicios),
      React.createElement(PorQue),
      React.createElement(Proceso),
      React.createElement(TrabajosReales),
      React.createElement(Galeria),
      React.createElement(Contacto)
    ),
    React.createElement(Footer),
    React.createElement(FloatingWa)
  );
}

window.HalexApp = App;

})();

;(function(){
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(window.HalexApp));
})();
