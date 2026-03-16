"use client";

import { User, Settings, Package, Bell, LogOut, ChevronRight, CircleUser } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="bg-ag-bg min-h-screen pt-64 pb-20">
      <div className="container-retail">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="w-24 h-24 rounded-full bg-ag-primary/10 border-2 border-ag-primary flex items-center justify-center text-ag-primary">
               <CircleUser size={48} />
            </div>
            <div className="text-center md:text-left space-y-1">
               <h1 className="font-heading font-black text-3xl md:text-5xl text-ag-text uppercase tracking-tight leading-none">
                 My <span className="text-ag-primary">Antigravity</span>
               </h1>
               <p className="font-body text-ag-text-muted text-sm font-bold uppercase tracking-widest">Rahul Sharma • Premium Segment</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar Nav */}
            <div className="lg:col-span-1 space-y-2">
               {[
                 { label: "Dashboard", icon: <User size={18} />, active: true },
                 { label: "Project Quotes", icon: <Package size={18} /> },
                 { label: "Notifications", icon: <Bell size={18} />, count: 3 },
                 { label: "Account Settings", icon: <Settings size={18} /> },
               ].map((item, i) => (
                 <button 
                   key={i} 
                   className={`w-full flex items-center justify-between p-4 rounded-lg transition-all ${item.active ? "bg-ag-primary text-white shadow-lg shadow-ag-primary/20" : "hover:bg-ag-bg-alt text-ag-text-muted hover:text-ag-text"}`}
                 >
                   <div className="flex items-center gap-3">
                      {item.icon}
                      <span className="text-[11px] font-bold uppercase tracking-wider">{item.label}</span>
                   </div>
                   {item.count && (
                     <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${item.active ? "bg-white text-ag-primary" : "bg-ag-primary text-white"}`}>
                        {item.count}
                     </span>
                   )}
                 </button>
               ))}
               <button className="w-full flex items-center gap-3 p-4 rounded-lg text-ag-plasma hover:bg-ag-plasma/5 transition-all mt-8">
                  <LogOut size={18} />
                  <span className="text-[11px] font-bold uppercase tracking-wider">Logout Session</span>
               </button>
            </div>

            {/* Main Content Dashboard */}
            <div className="lg:col-span-3 space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: "Active Quotes", value: "02" },
                    { label: "Site Visits", value: "01" },
                    { label: "Service Request", value: "00" }
                  ].map((stat, i) => (
                    <div key={i} className="retail-card p-6 bg-white flex flex-col items-center">
                       <span className="text-[10px] font-black text-ag-text-muted uppercase tracking-[0.2em] mb-2">{stat.label}</span>
                       <span className="text-4xl font-heading font-black text-ag-primary">{stat.value}</span>
                    </div>
                  ))}
               </div>

               <div className="retail-card overflow-hidden">
                  <div className="p-6 border-b border-ag-border flex justify-between items-center bg-ag-bg-alt/30">
                     <h3 className="font-body font-black text-ag-text text-[11px] uppercase tracking-widest">Recent Activity</h3>
                     <Link href="#" className="text-[10px] font-black text-ag-primary hover:underline uppercase tracking-widest">Full History</Link>
                  </div>
                  <div className="divide-y divide-ag-border">
                     {[
                       { type: "Quote Generated", project: "Football Turf - Gurgaon", status: "Review", date: "2 Hours Ago" },
                       { type: "Site Visit Scheduled", project: "Academy Multi-Sport", status: "Confirmed", date: "Yesterday" }
                     ].map((row, i) => (
                       <div key={i} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-ag-bg-alt/20 transition-colors">
                          <div className="space-y-1">
                             <p className="text-sm font-bold text-ag-text">{row.type}</p>
                             <p className="text-[11px] text-ag-text-muted font-medium uppercase tracking-wide">{row.project}</p>
                          </div>
                          <div className="flex items-center gap-8">
                             <div className="text-right">
                                <span className="bg-ag-primary/10 text-ag-primary text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">{row.status}</span>
                                <p className="text-[9px] text-ag-text-muted font-bold mt-1 uppercase">{row.date}</p>
                             </div>
                             <ChevronRight size={16} className="text-ag-text-muted" />
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
