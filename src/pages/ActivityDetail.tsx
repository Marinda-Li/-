import { Link, useParams } from 'react-router-dom'
import { activities, clubActivityPosts } from '@/data/mock'
import { useProfile } from '@/context/ProfileContext'

export default function ActivityDetail() {
  const { id } = useParams()
  const { openProfileModal } = useProfile()
  const a = activities.find((x) => x.id === id)
  const post = clubActivityPosts.find((x) => x.id === id)

  if (!a && !post) {
    return (
      <div style={{ padding: 24 }}>
        <p>未找到该活动。</p>
        <Link to="/app/activities">返回活动</Link>
      </div>
    )
  }

  if (post) {
    return (
      <div className="post-detail">
        <Link to="/app/activities" className="post-detail__back">
          ← 返回活动
        </Link>

        <article className="post-detail__card">
          <header className="post-detail__head">
            <span className="post-detail__club">{post.clubName}</span>
            <h1 className="post-detail__title">
              {post.activityTitle} - {post.datePart}
            </h1>
          </header>

          <p className="post-detail__body">{post.body}</p>

          <div className="post-detail__grid">
            {post.imageUrls.map((url) => (
              <img key={url} src={url} alt="" className="post-detail__img" loading="lazy" />
            ))}
          </div>

          <footer className="post-detail__foot">
            <time className="post-detail__time" dateTime={post.publishedAt}>
              {post.publishedAt}
            </time>
            <div className="post-detail__actions">
              <button type="button" className="post-detail__icon-btn" aria-label="点赞">
                ♡
              </button>
              <button type="button" className="post-detail__icon-btn" aria-label="评论">
                💬
              </button>
              <div className="post-detail__host">
                <img src={post.organizerAvatarUrl} alt="" className="post-detail__host-ava" loading="lazy" />
              </div>
            </div>
          </footer>
          <p className="post-detail__host-name">负责人 · {post.organizerName}</p>
        </article>

        <button
          type="button"
          className="btn-primary post-detail__cta"
          onClick={() =>
            openProfileModal('下一期开放或开始报名时，我们会通过消息提醒你。建议先完善资料以便接收通知。')
          }
        >
          下期开放提醒我
        </button>

        <style>{`
          .post-detail {
            min-height: 100%;
            background: #121212;
            color: #e6e6e6;
            padding: 12px 16px calc(24px + env(safe-area-inset-bottom));
          }
          .post-detail__back {
            display: inline-block;
            margin-bottom: 16px;
            font-size: 14px;
            font-weight: 600;
            color: #9a9a9a;
          }
          .post-detail__card {
            border-left: 2px dotted rgba(255, 255, 255, 0.12);
            padding-left: 14px;
            margin-left: 4px;
          }
          .post-detail__head {
            margin-bottom: 12px;
          }
          .post-detail__club {
            display: block;
            font-size: 13px;
            font-weight: 600;
            color: #8a8a8a;
            margin-bottom: 8px;
          }
          .post-detail__title {
            margin: 0;
            font-size: 18px;
            font-weight: 800;
            line-height: 1.4;
            color: #fafafa;
            text-align: left;
          }
          .post-detail__body {
            margin: 0 0 14px;
            font-size: 14px;
            line-height: 1.65;
            color: #b8b8b8;
          }
          .post-detail__grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6px;
            margin-bottom: 14px;
          }
          .post-detail__img {
            width: 100%;
            aspect-ratio: 4 / 3;
            object-fit: cover;
            border-radius: 10px;
            display: block;
          }
          .post-detail__foot {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 8px;
          }
          .post-detail__time {
            font-size: 12px;
            color: #888;
          }
          .post-detail__actions {
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .post-detail__icon-btn {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            border: 1.5px solid #444;
            background: #1e1e1e;
            color: #aaa;
            font-size: 15px;
            line-height: 1;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .post-detail__host {
            margin-left: 4px;
          }
          .post-detail__host-ava {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            border: 2px solid #333;
            object-fit: cover;
            display: block;
          }
          .post-detail__host-name {
            margin: 0 0 16px;
            font-size: 12px;
            color: #777;
            text-align: right;
          }
          .post-detail__cta {
            width: 100%;
            margin-top: 4px;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="detail">
      <Link to="/app/activities" className="detail__back">
        ← 返回活动
      </Link>
      <h1 className="detail__title">{a!.title}</h1>
      <div className="detail__panel sketch-border">
        <h2>活动信息详情</h2>
        <p>
          <strong>主办：</strong>
          {a!.clubName}
        </p>
        <p>
          <strong>时间：</strong>
          {a!.time}
        </p>
        <p>
          <strong>地点：</strong>
          {a!.place}
        </p>
        <p>更多说明与报名入口可在此扩展。</p>
      </div>
      <button
        type="button"
        className="btn-primary detail__cta"
        onClick={() => openProfileModal('参加活动前请完善资料，便于主办方联系你。')}
      >
        参加活动
      </button>
      <style>{`
        .detail {
          padding: 16px 16px 24px;
        }
        .detail__back {
          display: inline-block;
          margin-bottom: 12px;
          font-size: 14px;
          font-weight: 600;
          color: var(--muted);
        }
        .detail__title {
          margin: 0 0 16px;
          font-size: 22px;
          font-weight: 800;
        }
        .detail__panel {
          padding: 16px;
          border-radius: 18px;
        }
        .detail__panel h2 {
          margin: 0 0 10px;
          font-size: 15px;
          font-weight: 800;
        }
        .detail__panel p {
          margin: 0 0 8px;
          font-size: 14px;
          line-height: 1.55;
        }
        .detail__cta {
          width: 100%;
          margin-top: 16px;
        }
      `}</style>
    </div>
  )
}
