'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useParams } from 'next/navigation';
import ProductCard from '@/components/ui/ProductCard';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Helper to slugify category names
const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-');

// --- PROFESSIONAL MASTER HERO ARCHITECTURES ---

const MasterSplitHero = ({ title, description, baseImage, sports }: any) => {
  return (
    <div className="mb-12 flex flex-col md:flex-row h-[350px] md:h-[380px] rounded-3xl overflow-hidden border border-ag-border shadow-sm bg-white">
       <div className="w-full md:w-[40%] p-8 flex flex-col justify-center bg-[#fdfcf9]">
          <span className="text-ag-primary font-bold text-[8px] uppercase tracking-[0.4em] mb-3 block">Infrastructure</span>
          <h1 className="text-3xl md:text-5xl font-heading font-black text-ag-text uppercase tracking-tighter leading-none mb-4">{title}</h1>
          <p className="text-ag-text-muted text-[10px] font-body leading-relaxed max-w-xs">{description.substring(0, 100)}...</p>
          <div className="mt-6 flex gap-2">
             <button className="bg-ag-text text-white px-5 py-2 rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-ag-primary transition-all">View Specs</button>
             <button className="border border-ag-border text-ag-text px-5 py-2 rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-ag-bg-alt transition-all">Talk to Expert</button>
          </div>
       </div>
       <div className="w-full md:w-[60%] relative h-full">
          <img src={baseImage} alt={title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute top-4 right-4 flex gap-2">
             {sports.slice(0, 2).map((s: string) => (
                <span key={s} className="bg-black/40 backdrop-blur-md text-white text-[7px] font-bold px-2 py-1 rounded-full uppercase tracking-widest border border-white/20">{s}</span>
             ))}
          </div>
       </div>
    </div>
  );
};

const MasterGalleryHero = ({ title, description, baseImage }: any) => {
  return (
    <div className="mb-12 relative h-[350px] md:h-[380px] rounded-3xl overflow-hidden shadow-md">
       <img src={baseImage} className="absolute inset-0 w-full h-full object-cover" alt={title} />
       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
       <div className="absolute bottom-0 left-0 right-0 p-10 flex flex-col md:flex-row items-end justify-between gap-6">
          <div className="max-w-xl text-left">
             <h1 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-3">{title}</h1>
             <p className="text-white/70 text-[11px] font-body max-w-lg leading-relaxed">{description.substring(0, 120)}...</p>
          </div>
          <button className="bg-white text-ag-text px-8 py-3 rounded-xl font-black uppercase tracking-widest text-[9px] hover:bg-ag-primary hover:text-white transition-all shadow-xl">Quote</button>
       </div>
    </div>
  );
};

const MasterMinimalHero = ({ title, description, baseImage, sports }: any) => {
  return (
    <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-3 h-[350px] md:h-[380px]">
       <div className="relative rounded-3xl overflow-hidden border border-ag-border bg-white flex flex-col justify-center items-center text-center p-8">
           <div className="w-12 h-px bg-ag-primary mb-6" />
           <h1 className="text-4xl md:text-5xl font-heading font-black text-ag-text uppercase tracking-tighter leading-none mb-4">{title}</h1>
           <p className="text-ag-text-muted text-[10px] font-body max-w-sm mb-6 leading-relaxed">{description.substring(0, 120)}...</p>
           <button className="border-b border-ag-primary text-ag-primary font-black uppercase text-[9px] tracking-widest py-1">Explore Range</button>
       </div>
       <div className="relative rounded-3xl overflow-hidden border border-ag-border">
          <img src={baseImage} className="absolute inset-0 w-full h-full object-cover" alt="Main" />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[7px] font-black uppercase tracking-[0.2em]">{sports[0] || 'Official'}</div>
       </div>
    </div>
  );
};

const MasterAdventureHero = ({ title, description, baseImage, sports }: any) => {
  return (
    <div className="mb-12 grid grid-cols-1 md:grid-cols-12 gap-3 h-[350px] md:h-[380px]">
       <div className="md:col-span-8 relative rounded-3xl overflow-hidden border border-ag-border group">
          <img src={baseImage} className="absolute inset-0 w-full h-full object-cover" alt={title} />
          <div className="absolute top-0 left-0 right-0 p-8 flex flex-col justify-start">
             <div className="bg-white/95 text-ag-text px-6 py-2 w-fit rounded-full flex items-center gap-4 border border-white/20 shadow-xl">
                 <span className="text-[10px] font-black uppercase tracking-tighter">{title}</span>
                 <div className="w-1.5 h-1.5 rounded-full bg-ag-primary animate-pulse" />
                 <span className="text-[9px] font-bold text-ag-text-muted uppercase tracking-widest">Active Solutions</span>
             </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="bg-black/60 backdrop-blur-md text-white text-[10px] p-4 rounded-xl border border-white/10 max-w-sm">{description.substring(0, 100)}...</p>
          </div>
       </div>
       <div className="md:col-span-4 grid grid-rows-2 gap-3 h-full">
          {[
            { img: "https://images.unsplash.com/photo-1541252260730-0412e3e2108e?auto=format&fit=crop&q=80&w=400", label: sports[0] || 'Experience' },
            { img: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=400", label: sports[1] || 'Technical' }
          ].map((s, i) => (
             <div key={i} className="relative rounded-3xl overflow-hidden border border-ag-border bg-[#f8f9fa]">
                <img src={s.img} className="absolute inset-0 w-full h-full object-cover opacity-60" alt={s.label} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-ag-text font-black text-xl uppercase tracking-tighter italic">{s.label}</span>
                </div>
             </div>
          ))}
       </div>
    </div>
  );
};

const MasterRosterHero = ({ title, description, baseImage, sports }: any) => {
  return (
    <div className="mb-12 flex flex-col md:flex-row gap-3 h-[350px] md:h-[380px]">
       <div className="flex-1 relative rounded-3xl overflow-hidden border border-ag-border bg-ag-text text-white p-10 flex flex-col justify-end">
          <div className="absolute top-0 right-0 p-10">
             <div className="w-16 h-16 border-2 border-ag-primary rounded-full flex items-center justify-center text-ag-primary text-2xl font-black">2024</div>
          </div>
          <span className="text-ag-primary font-bold text-[9px] uppercase tracking-[0.3em] mb-4 block">Elite Training Division</span>
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter leading-none mb-6 underline decoration-ag-primary decoration-4 underline-offset-8">{title}</h1>
          <p className="text-white/60 text-xs font-body max-w-sm">{description.substring(0, 100)}...</p>
       </div>
       <div className="w-full md:w-[40%] relative rounded-3xl overflow-hidden border border-ag-border shadow-xl">
          <img src={baseImage} className="absolute inset-0 w-full h-full object-cover" alt="Elite" />
          <div className="absolute bottom-0 left-0 right-0 bg-white p-6 border-t border-ag-border flex items-center justify-between">
              <div className="flex flex-col">
                  <span className="text-ag-text font-black text-sm uppercase">Official Roster</span>
                  <span className="text-ag-text-muted text-[8px] uppercase">{sports.slice(0, 3).join(' • ')}</span>
              </div>
              <button className="bg-ag-text text-white p-2 rounded-lg hover:bg-ag-primary transition-all">
                  <ChevronRight size={16} />
              </button>
          </div>
       </div>
    </div>
  );
};

// --- MAIN CONTENT ---

function CategoryContent() {
  const params = useParams();
  const categorySlug = params.categorySlug as string;
  
  const [products, setProducts] = useState<any[]>([]);
  const [allCategories, setAllCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeSport, setActiveSport] = useState("all");

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch("/api/admin/products").then(res => res.json()),
      fetch("/api/admin/categories").then(res => res.json())
    ]).then(([productsData, categoriesData]) => {
      setProducts(productsData || []);
      setAllCategories(categoriesData || []);
    }).catch(console.error).finally(() => setLoading(false));
  }, []);

  const currentCategory = useMemo(() => {
    return allCategories.find(c => slugify(c.label) === categorySlug || c.id === categorySlug);
  }, [allCategories, categorySlug]);

  const currentCategoryLabel = currentCategory ? currentCategory.label : categorySlug.replace(/-/g, ' ');

  const defaultSubCategories: Record<string, string[]> = {
    'surface-sports': ['Synthetic Turf', 'Running Tracks', 'Tennis Courts', 'Basketball Courts', 'Badminton Courts', 'Multipurpose Courts'],
    'water-sports': ['Swimming Pools', 'Kayaking Lanes', 'Rowing Channels', 'Poolside Decking', 'Aquatic Centers'],
    'small-sports': ['Table Tennis', 'Chess & Carroms', 'Billiards & Snooker', 'Indoor Games Arena'],
    'budget-sports': ['Community Turf', 'School Playgrounds', 'Low-cost Court Solutions', 'Basic Gym Setups'],
    'sports-academies': ['Cricket Academy', 'Football Academy', 'Tennis Academy', 'Swimming Coaching', 'Boxing Rings'],
    'play-zones': ['Multi-activity Play Areas', 'Soft Play Zones', 'Trampoline Parks', 'Outdoor Swings & Slides'],
    'adventure-sports-games': ['Rock Climbing Walls', 'Zipline Setups', 'Paintball Arenas', 'Obstacle Courses'],
    'challenge-courses': ['Agility Training Courses', 'Military Grade Setups', 'Strength Testing Areas'],
    'talent-scout-clubs': ['Performance Testing Labs', 'Speed Tracks', 'Scouting Arenas', 'Analytics Hubs']
  };

  const sportsInCategory = useMemo(() => {
    if (!currentCategoryLabel) return [];
    if (currentCategory?.subCategories?.length > 0) {
        return currentCategory.subCategories.map((s: any) => s.name);
    }
    if (defaultSubCategories[categorySlug]) {
        return defaultSubCategories[categorySlug];
    }
    const catProducts = products.filter(p => {
      const pSlug = slugify(p.category);
      return p.category === currentCategoryLabel || pSlug === categorySlug || p.category === currentCategory?.id;
    });
    return Array.from(new Set(catProducts.map(p => p.shortSpec || p.name).filter(Boolean)));
  }, [currentCategoryLabel, currentCategory, products, categorySlug]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const pSlug = slugify(product.category);
      const matchesCategory = product.category === currentCategoryLabel || pSlug === categorySlug || product.category === currentCategory?.id;
      const matchesSport = activeSport === 'all' || product.shortSpec === activeSport || product.name === activeSport;
      return matchesCategory && matchesSport;
    });
  }, [products, currentCategoryLabel, currentCategory, categorySlug, activeSport]);

  const productsToDisplay = useMemo(() => {
    if (activeSport === 'all') {
        return sportsInCategory.flatMap((sport: string) => {
            const productsInSport = filteredProducts.filter(p => p.shortSpec === sport || p.name === sport);
            const baseImage = currentCategory?.imageUrl || `/images/sports/${categorySlug.replace(/-/g, '_')}.png`;
            const mockSolutions = [
                { id: `mock-${slugify(sport)}-1`, name: `Pro ${sport} System V1`, slug: slugify(`pro-${sport}-v1`), image: baseImage, badge: "Premium" },
                { id: `mock-${slugify(sport)}-2`, name: `${sport} Infrastructure Elite`, slug: slugify(`${sport}-elite`), image: `https://images.unsplash.com/photo-1541252260730-0412e3e2108e?auto=format&fit=crop&q=80&w=800`, badge: "Heavy Duty" },
                { id: `mock-${slugify(sport)}-3`, name: `Custom ${sport} Solution`, slug: slugify(`custom-${sport}-solution`), image: `https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=800`, badge: "Olympic Grade" }
            ];
            const featuredFromDb = productsInSport.slice(0, 3).map(p => ({ id: p.id, name: p.name, slug: p.slug, image: p.imageUrl || baseImage, badge: "Featured" }));
            return [...featuredFromDb, ...mockSolutions].slice(0, 3);
        });
    } else {
        const productsInSport = filteredProducts.filter(p => p.shortSpec === activeSport || p.name === activeSport);
        const baseImage = currentCategory?.imageUrl || `/images/sports/${categorySlug.replace(/-/g, '_')}.png`;
        const mockSolutions = [
            { id: `mock-${slugify(activeSport)}-1`, name: `Pro ${activeSport} System V1`, slug: slugify(`pro-${activeSport}-v1`), image: baseImage, badge: "Premium" },
            { id: `mock-${slugify(activeSport)}-2`, name: `${activeSport} Infrastructure Elite`, slug: slugify(`${activeSport}-elite`), image: `https://images.unsplash.com/photo-1541252260730-0412e3e2108e?auto=format&fit=crop&q=80&w=800`, badge: "Heavy Duty" },
            { id: `mock-${slugify(activeSport)}-3`, name: `Custom ${activeSport} Solution`, slug: slugify(`custom-${activeSport}-solution`), image: `https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=800`, badge: "Olympic Grade" }
        ];
        const featuredFromDb = productsInSport.slice(0, 3).map(p => ({ id: p.id, name: p.name, slug: p.slug, image: p.imageUrl || baseImage, badge: "Featured" }));
        const combined = [...featuredFromDb, ...mockSolutions].slice(0, 3);
        const remaining = productsInSport.length > 3 ? productsInSport.slice(3).map(p => ({ id: p.id, name: p.name, slug: p.slug, image: p.imageUrl || baseImage, badge: "Solution" })) : [];
        return [...combined, ...remaining];
    }
  }, [activeSport, filteredProducts, sportsInCategory, currentCategory, categorySlug]);

  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-ag-bg flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-ag-primary border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (allCategories.length > 0 && !currentCategory && !['surface-sports', 'water-sports', 'small-sports', 'budget-sports', 'sports-academies', 'play-zones', 'adventure-sports-games', 'challenge-courses', 'talent-scout-clubs'].includes(categorySlug)) {
      return (
        <div className="pt-32 pb-32 text-center bg-ag-bg min-h-[60vh] flex flex-col items-center justify-center">
            <h2 className="text-4xl font-heading font-black text-ag-text mb-4 uppercase">Page Not Found</h2>
            <p className="text-ag-text-muted mb-8">This inner page does not exist yet.</p>
            <Link href="/" className="btn btn-primary px-8 py-3">Return Home</Link>
        </div>
      );
  }

  // Determine which hero layout to use based on the vertical
  const heroStyle = ['surface-sports', 'water-sports'].includes(categorySlug) ? 'split' : 
                    ['small-sports', 'budget-sports'].includes(categorySlug) ? 'gallery' :
                    ['sports-academies'].includes(categorySlug) ? 'minimal' :
                    ['play-zones', 'adventure-sports-games'].includes(categorySlug) ? 'adventure' : 'roster';
  
  const baseImage = currentCategory?.imageUrl || `/images/sports/${categorySlug.replace(/-/g, '_')}.png`;
  const description = currentCategory?.description || `Premium infrastructure and expert services for ${currentCategoryLabel.toLowerCase()}. Engineered for high-performance athletic environments and professional safety standards.`;

  return (
    <div className="pt-8 min-h-screen bg-ag-bg pb-24">
      <div className="container-retail">
        {/* Breadcrumb - Global across all heroes */}
        <div className="flex items-center gap-2 text-[10px] font-body text-ag-text-muted mb-6 tracking-[0.2em] uppercase">
          <Link href="/" className="hover:text-ag-primary transition-colors">Home</Link>
          <ChevronRight size={10} />
          <span className="text-ag-primary font-bold">{currentCategoryLabel}</span>
          {activeSport !== 'all' && (
              <>
              <ChevronRight size={10} />
              <span className="text-ag-primary font-bold">{activeSport}</span>
              </>
          )}
        </div>

        {/* --- PROFESSIONAL DIVERSIFIED MASTER HERO SECTION --- */}
        {heroStyle === 'split' && <MasterSplitHero title={currentCategoryLabel} description={description} baseImage={baseImage} sports={sportsInCategory} />}
        {heroStyle === 'gallery' && <MasterGalleryHero title={currentCategoryLabel} description={description} baseImage={baseImage} />}
        {heroStyle === 'minimal' && <MasterMinimalHero title={currentCategoryLabel} description={description} baseImage={baseImage} sports={sportsInCategory} />}
        {heroStyle === 'adventure' && <MasterAdventureHero title={currentCategoryLabel} description={description} baseImage={baseImage} sports={sportsInCategory} />}
        {heroStyle === 'roster' && <MasterRosterHero title={currentCategoryLabel} description={description} baseImage={baseImage} sports={sportsInCategory} />}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <div className="sticky top-40 space-y-8">
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-ag-primary flex items-center gap-2">
                   <div className="w-1 h-3 bg-ag-primary" /> Subcategories
                </h3>
                
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => setActiveSport('all')}
                    className={`text-left text-sm py-2.5 px-4 rounded transition-all duration-300 ${activeSport === 'all' ? 'bg-ag-primary text-white font-bold shadow-lg shadow-ag-primary/20' : 'text-ag-text-muted hover:bg-ag-bg-alt hover:text-ag-text'}`}
                  >
                    View All {currentCategoryLabel}
                  </button>
                  {sportsInCategory.map((sport: string) => (
                    <button
                      key={sport}
                      onClick={() => setActiveSport(sport)}
                      className={`text-left text-sm py-2.5 px-4 rounded transition-all duration-300 ${activeSport === sport ? 'bg-ag-primary text-white font-bold shadow-lg shadow-ag-primary/20' : 'text-ag-text-muted hover:bg-ag-bg-alt hover:text-ag-text'}`}
                    >
                      {sport}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Showcase Area */}
          <div className="lg:col-span-3">
            <div>
              {productsToDisplay.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                  {productsToDisplay.map((sol: any) => (
                    <ProductCard 
                      key={sol.id}
                      name={sol.name}
                      category={sol.badge || "Premium"}
                      shortSpec="Professional sports infrastructure engineered for maximum durability and athlete safety."
                      slug={sol.slug}
                      image={sol.image}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-white border-2 border-dashed border-ag-border p-20 text-center rounded-2xl">
                  <h3 className="text-2xl font-heading font-black text-ag-text mb-4 uppercase">No solutions available</h3>
                  <p className="text-ag-text-muted mb-10 max-w-sm mx-auto font-body">We are currently updating our portfolio for this specific vertical. Check back soon for premium infrastructure options.</p>
                  <button 
                    onClick={() => setActiveSport('all')}
                    className="btn btn-primary px-10 py-3"
                  >
                    View All Products
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InnerCategoryPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-ag-bg flex items-center justify-center "><div className="w-12 h-12 rounded-full border-4 border-ag-primary border-t-transparent animate-spin"></div></div>}>
            <CategoryContent />
        </Suspense>
    )
}
