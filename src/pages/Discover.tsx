import { useState } from 'react'
import { InterestWordSphere } from '@/components/InterestWordSphere'
import { ClubRecruitCard } from '@/components/ClubRecruitCard'
import { useInterestLabels } from '@/hooks/useInterestLabels'
import { useProfile } from '@/context/ProfileContext'
import { sortForDiscover, clubRecruitments } from '@/data/clubRecruitments'

export default function Discover() {
  const { addWish } = useProfile()
  const labels = useInterestLabels()
  const sorted = sortForDiscover(clubRecruitments)
  const [heroOpen, setHeroOpen] = useState(false)

  return (
    <div className="discover-page">
      <section className={`discover__top ${heroOpen ? 'discover__top--open' : ''}`} aria-label="兴趣匹配词云">
        <button
          type="button"
          className="discover__top-bar"
          onClick={() => setHeroOpen((v) => !v)}
          aria-expanded={heroOpen}
          aria-controls="discover-hero-panel"
          id="discover-hero-toggle"
        >
          <h1 className="discover__title">发现</h1>
          <span className="discover__top-hint">{heroOpen ? '收起兴趣匹配' : '下拉展开兴趣匹配推荐'}</span>
          <span className="discover__top-chevron" aria-hidden>
            {heroOpen ? '▲' : '▼'}
          </span>
        </button>
        <div
          id="discover-hero-panel"
          className={`discover__top-panel ${heroOpen ? 'discover__top-panel--open' : ''}`}
          role="region"
          aria-labelledby="discover-hero-toggle"
          aria-hidden={!heroOpen}
        >
          <InterestWordSphere words={labels} compact />
        </div>
      </section>

      <section className="discover__feed" aria-label="社团招募">
        <h2 className="discover__feed-label">招募信息</h2>
        <div className="discover__grid">
          {sorted.map((r) => (
            <ClubRecruitCard
              key={r.id}
              r={r}
              onWish={() => addWish({ id: r.id, clubName: r.clubName, title: r.title })}
            />
          ))}
        </div>
      </section>

      <style>{`
        .discover-page {
          min-height: 100%;
        }
        .discover__top {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 0;
          padding: 10px 12px 12px;
          border-bottom: none;
          background:
            radial-gradient(ellipse 120% 80% at 50% 12%, rgba(120, 90, 200, 0.38), transparent 55%),
            radial-gradient(ellipse 90% 60% at 88% 78%, rgba(60, 140, 220, 0.24), transparent 50%),
            linear-gradient(165deg, #1a1f3a 0%, #2d1f4a 38%, #1e2d52 72%, #152238 100%);
          overflow: hidden;
        }
        .discover__top--open {
          padding-bottom: 14px;
        }
        .discover__top::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.42;
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 10px 10px;
          pointer-events: none;
        }
        .discover__top-bar,
        .discover__top-panel {
          position: relative;
          z-index: 2;
        }
        .discover__top-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 8px 4px;
          margin: 0;
          border: none;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.08);
          cursor: pointer;
          text-align: left;
          font: inherit;
          color: #fff;
          -webkit-tap-highlight-color: transparent;
        }
        .discover__top-bar:active {
          background: rgba(255, 255, 255, 0.12);
        }
        .discover__title {
          margin: 0;
          flex-shrink: 0;
          font-size: 18px;
          font-weight: 800;
          color: #fff;
          text-shadow: 0 1px 10px rgba(0, 0, 0, 0.35);
        }
        .discover__top-hint {
          flex: 1;
          font-size: 12px;
          font-weight: 600;
          opacity: 0.88;
          line-height: 1.3;
        }
        .discover__top-chevron {
          flex-shrink: 0;
          font-size: 11px;
          opacity: 0.85;
        }
        .discover__top-panel {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          pointer-events: none;
          transition: max-height 0.38s ease, opacity 0.22s ease;
        }
        .discover__top-panel--open {
          max-height: 420px;
          padding-top: 12px;
          opacity: 1;
          pointer-events: auto;
        }
        .discover__feed {
          padding: 16px 10px 20px;
          background: var(--paper);
        }
        .discover__feed-label {
          margin: 0 0 12px 6px;
          font-size: 16px;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: var(--ink);
        }
        .discover__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 10px;
          align-items: start;
        }
      `}</style>
    </div>
  )
}
