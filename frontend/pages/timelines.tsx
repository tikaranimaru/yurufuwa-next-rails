import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Timeline {
  id: number;
  user_id: number;
  datetime: string;
  title: string | null;
  content: string;
  created_at: string;
  updated_at: string;
}

const TimelinesPage = () => {
  const [timelines, setTimelines] = useState<Timeline[]>([]);
  const userId = 1

  useEffect(() => {
    const fetchTimelines = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/timelines?user_id=${userId}`);
        const data = await response.json();
        setTimelines(data);
      } catch (error) {
        console.error('Error fetching timelines', error);
      }
    };

    fetchTimelines();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <a href="/timelines/new" className="mb-4 p-2 btn text-white bg-blue-500 rounded hover:bg-blue-700">
        + NEW
      </a>
      {timelines.map((timeline) => (
        <div key={timeline.id} className="p-4 mb-2 bg-gray-100 rounded shadow">
          <div className="text-black text-sm">{timeline.datetime}</div>
          <div className="text-black text-lg font-semibold">{timeline.title || 'No Title'}</div>
          <p className="text-gray-800">{timeline.content}</p>
          <Link href={`/timelines/${timeline.id}`} className="btn hover:underline">
            詳細を見る
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TimelinesPage;