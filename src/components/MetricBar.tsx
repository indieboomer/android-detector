import React from "react";

interface Props {
  label: string;
  value: number; // 0-100
  showValue?: boolean;
}

export function MetricBar({ label, value, showValue = true }: Props) {
  const fillClass =
    value < 25 ? "metric-fill danger" : value < 50 ? "metric-fill warn" : "metric-fill";

  return (
    <div className="metric-bar">
      <span className="metric-label">{label}</span>
      <div className="metric-track">
        <div className={fillClass} style={{ width: `${value}%` }} />
      </div>
      {showValue && <span className="metric-value">{value}%</span>}
    </div>
  );
}
