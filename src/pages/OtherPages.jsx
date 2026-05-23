import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

// ─── STADIUM ────────────────────────────────────────────────────────────────
export function Stadium() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <div className="page-hero">
        <div className="max-w-screen-xl mx-auto">
          <div className="font-oswald text-xs tracking-[4px] uppercase text-gold/70 mb-2">Home Ground</div>
          <h1 className="font-bebas text-7xl md:text-9xl text-white leading-none">
            SANTIAGO <span className="text-gold">BERNABÉU</span>
          </h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/10 mb-16">
          {[['81,044','Seating Capacity'],['1947','Year Opened'],['105×68m','Pitch Size'],['€1B+','Renovation Cost']].map(([v,k])=>(
            <div key={k} className="bg-[#0f0f0f] py-10 text-center">
              <div className="font-bebas text-4xl text-gold">{v}</div>
              <div className="font-oswald text-xs tracking-widest uppercase text-white/40 mt-2">{k}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeader label="Estadio Santiago Bernabéu" title="THE" goldPart="CATHEDRAL" />
            <p className="text-rmgray-lighter text-sm leading-relaxed mb-4">
              The Santiago Bernabéu is one of the most iconic football venues in the world, located in the heart of Madrid along the Paseo de la Castellana. Named in honour of the club's legendary president, the stadium opened on December 14, 1947 with a match against Belenenses of Portugal.
            </p>
            <p className="text-rmgray-lighter text-sm leading-relaxed mb-4">
              The stadium has hosted four UEFA Champions League finals (1957, 1969, 1980, 2010), the 1964 European Championship final, and the 1982 FIFA World Cup final.
            </p>
            <div className="bg-gold/5 border-l-2 border-gold p-5 mt-6">
              <p className="text-white/80 text-sm leading-relaxed">
                <strong className="text-gold">2023 Renovation:</strong> A €1 billion renovation added a retractable roof, a 360° rotating LED façade illuminating the Madrid skyline, and an underground music venue — making it the most advanced stadium on earth.
              </p>
            </div>
          </div>

          <div>
            <SectionHeader label="Historic Matches" title="KEY" goldPart="MOMENTS" />
            <div className="space-y-2">
              {[
                ['🏆','1957 European Cup Final','Real Madrid 2–0 Fiorentina'],
                ['🏆','1969 European Cup Final','AC Milan 4–1 Ajax'],
                ['🏆','1980 European Cup Final','Nottingham Forest 1–0 Hamburg'],
                ['🏆','2010 UCL Final','Internazionale 2–0 Bayern Munich'],
                ['🇪🇺','1964 Euro Final','Spain 2–1 Soviet Union'],
                ['🌍','1982 World Cup Final','Italy 3–1 West Germany'],
              ].map(([icon,comp,result])=>(
                <div key={comp} className="flex items-center gap-3 bg-[#111] px-5 py-3 border border-white/5">
                  <span className="text-lg">{icon}</span>
                  <div>
                    <div className="font-oswald text-xs tracking-widest uppercase text-gold/70">{comp}</div>
                    <div className="font-bebas text-lg text-white">{result}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── CLUB ────────────────────────────────────────────────────────────────────
export function Club() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <div className="page-hero">
        <div className="max-w-screen-xl mx-auto">
          <div className="font-oswald text-xs tracking-[4px] uppercase text-gold/70 mb-2">Founded 1902</div>
          <h1 className="font-bebas text-7xl md:text-9xl text-white leading-none">
            ABOUT <span className="text-gold">THE CLUB</span>
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <SectionHeader label="Real Madrid Club de Fútbol" title="THE" goldPart="WORLD'S CLUB" />

        <p className="text-rmgray-lighter text-sm leading-relaxed mb-5">
          Real Madrid Club de Fútbol is a professional football club based in Madrid, Spain. Founded on March 6, 1902, the club competes in La Liga, the top tier of Spanish football. Real Madrid has won a record <strong className="text-gold">36 La Liga titles</strong> and a record <strong className="text-gold">15 UEFA Champions League titles</strong>.
        </p>
        <p className="text-rmgray-lighter text-sm leading-relaxed mb-5">
          Chosen by FIFA as the <strong className="text-gold">Best Club of the 20th Century</strong> in 2000, and ranked best European club of the century by IFFHS in 2010. Unlike most clubs worldwide, Real Madrid is owned by its members (<em>socios</em>), who elect a president to govern the club.
        </p>
        <p className="text-rmgray-lighter text-sm leading-relaxed mb-8">
          The current president is <strong className="text-white">Florentino Pérez</strong>, serving since 2000. The club had over 90,000 registered members as of 2024.
        </p>

        <div className="bg-gold/5 border-l-2 border-gold p-6 mb-10">
          <p className="text-gold font-oswald text-sm italic leading-relaxed">
            "Real Madrid is an idea, a way of understanding football, a symbol of what this sport can be."
          </p>
          <p className="text-rmgray text-xs mt-2 font-oswald tracking-widest uppercase">— Santiago Bernabéu, Club President 1943–1978</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gold/10">
          {[['450','Ronaldo\'s goals (all-time top)'],['741','Raúl\'s appearances (record)'],['15','UCL titles (world record)'],['1902','Year founded'],['90,000+','Club members (socios)'],['$6.6B','Forbes valuation (2024)']].map(([v,k])=>(
            <div key={k} className="bg-[#0f0f0f] py-8 px-4 text-center">
              <div className="font-bebas text-4xl text-gold">{v}</div>
              <div className="font-oswald text-xs tracking-widest uppercase text-white/40 mt-2 leading-tight">{k}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── RIVALRIES ───────────────────────────────────────────────────────────────
export function Rivalries() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <div className="page-hero">
        <div className="max-w-screen-xl mx-auto">
          <div className="font-oswald text-xs tracking-[4px] uppercase text-gold/70 mb-2">Historic Rivalries</div>
          <h1 className="font-bebas text-7xl md:text-9xl text-white leading-none">
            THE <span className="text-gold">DERBIES</span>
          </h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-16">
        {/* El Clásico */}
        <SectionHeader label="Spain's Greatest Fixture" title="EL" goldPart="CLÁSICO" />

        <div className="grid md:grid-cols-2 gap-px bg-gold/5 mb-16">
          <div className="bg-[#111] p-8">
            <div className="font-oswald text-xs tracking-widest uppercase text-gold/60 mb-1">vs FC Barcelona</div>
            <div className="font-bebas text-4xl text-white mb-6">EL CLÁSICO</div>
            <div className="grid grid-cols-4 gap-px bg-gold/10 mb-6">
              {[['104','Real Madrid Wins'],['99','Barcelona Wins'],['55','Draws'],['258','Total Played']].map(([n,l])=>(
                <div key={l} className="bg-[#0f0f0f] py-5 text-center">
                  <div className="font-bebas text-3xl text-gold">{n}</div>
                  <div className="font-oswald text-[9px] tracking-widest uppercase text-white/40 mt-1 leading-tight">{l}</div>
                </div>
              ))}
            </div>
            <p className="text-rmgray text-sm leading-relaxed">
              El Clásico — the most watched club football match on the planet — transcends sport, carrying cultural, political, and regional significance between the capital and Catalonia. First played in the 1902 Copa de la Coronación.
            </p>
          </div>
          <div className="bg-[#111] p-8">
            <div className="font-oswald text-xs tracking-widest uppercase text-gold/60 mb-4">History & Context</div>
            <div className="font-bebas text-3xl text-white mb-4">THE RIVALRY EXPLAINED</div>
            <p className="text-rmgray text-sm leading-relaxed mb-4">
              The rivalry deepened during the Franco dictatorship, when Barcelona represented Catalan identity and resistance, while Real Madrid was seen as the regime's club. This political dimension has faded, but the intensity has not.
            </p>
            <p className="text-rmgray text-sm leading-relaxed">
              Legendary transfers — most notably Alfredo Di Stéfano (1953) and Luís Figo (2000) — fuelled the rivalry. The 21st century duel between Cristiano Ronaldo and Lionel Messi brought El Clásico to unprecedented global attention.
            </p>
          </div>
        </div>

        {/* Madrid Derby */}
        <SectionHeader label="The Capital Derby" title="EL DERBI" goldPart="MADRILEÑO" />
        <div className="grid md:grid-cols-2 gap-px bg-gold/5">
          <div className="bg-[#111] p-8">
            <div className="font-oswald text-xs tracking-widest uppercase text-gold/60 mb-1">vs Atlético de Madrid</div>
            <div className="font-bebas text-4xl text-white mb-6">MADRID DERBY</div>
            <div className="grid grid-cols-3 gap-px bg-gold/10 mb-6">
              {[['120+','Real Wins'],['60+','Atlético Wins'],['50+','Draws']].map(([n,l])=>(
                <div key={l} className="bg-[#0f0f0f] py-5 text-center">
                  <div className="font-bebas text-3xl text-gold">{n}</div>
                  <div className="font-oswald text-[9px] tracking-widest uppercase text-white/40 mt-1">{l}</div>
                </div>
              ))}
            </div>
            <p className="text-rmgray text-sm leading-relaxed">
              Real Madrid and Atlético met in the 2014 and 2016 UCL finals — with Real Madrid winning both. Sergio Ramos's 93rd-minute header in Lisbon 2014 and Ronaldo's penalty shootout heroics in Milan 2016 are among the most celebrated moments in the club's history.
            </p>
          </div>
          <div className="bg-[#111] p-8">
            <div className="font-oswald text-xs tracking-widest uppercase text-gold/60 mb-4">Notable Moments</div>
            <div className="font-bebas text-3xl text-white mb-5">UNFORGETTABLE DERBIES</div>
            <div className="space-y-3">
              {[
                ['2014 UCL Final','Ramos 93\' equaliser, Real win 4–1 AET'],
                ['2016 UCL Final','Real win on penalties in Milan'],
                ['2019–20 La Liga','Atlético beaten 0–2 at Metropolitano'],
                ['2024 Super Cup QF','Real win 5–3 AET to reach final'],
              ].map(([title, desc])=>(
                <div key={title} className="border-l-2 border-gold/30 pl-4">
                  <div className="font-oswald text-xs tracking-widest uppercase text-gold">{title}</div>
                  <div className="font-oswald text-sm text-white/70 mt-0.5">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
