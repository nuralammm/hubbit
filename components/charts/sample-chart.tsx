"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "Jan", uv: 400 },
  { name: "Feb", uv: 310 },
  { name: "Mar", uv: 500 },
  { name: "Apr", uv: 460 },
  { name: "May", uv: 580 },
  { name: "Jun", uv: 620 }
];

export function SampleChart() {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ left: 0, right: 0, top: 8, bottom: 0 }}>
          <defs>
            <linearGradient id="brand" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="name" className="text-xs" tickLine={false} axisLine={false} />
          <YAxis className="text-xs" tickLine={false} axisLine={false} />
          <Tooltip cursor={{ stroke: "hsl(var(--primary))", strokeWidth: 1 }} />
          <Area type="monotone" dataKey="uv" stroke="hsl(var(--primary))" fill="url(#brand)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
