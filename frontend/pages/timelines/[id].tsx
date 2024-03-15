import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Timeline {
  id: number;
  user_id: number;
  datetime: string;
  title: string | null;
  content: string;
  created_at: string;
  updated_at: string;
}

const TimelineDetailPage = () => {
  const [timeline, setTimeline] = useState<Timeline | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchTimeline = async () => {
      if (id) {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/timelines/${id}`);
          const data = await response.json();
          setTimeline(data);
        } catch (error) {
          console.error('Error fetching timeline', error);
        }
      }
    };

    fetchTimeline();
  }, [id]);

  if (!timeline) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="p-4 mb-2 bg-gray-100 rounded shadow">
        <div className="text-gray-600 text-sm">{timeline.datetime}</div>
        <div className="text-lg font-semibold">{timeline.title || 'No Title'}</div>
        <p className="text-gray-800">{timeline.content}</p>
      </div>
      <button onClick={(e) => {router.back()}} className="mb-4 p-2 btn text-white rounded">戻る</button>
    </div>
  );
};

export default TimelineDetailPage;