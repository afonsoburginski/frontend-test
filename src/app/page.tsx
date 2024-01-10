'use client';

import Banner from '@/components/banner';
import ResourceCards from '@/components/resourceCards';
import WarningCards from '@/components/warningCards';
import ProgressCards from '@/components/progressCards';

export default function IndexPage() {
  return (
    <main className="p-4 md:py-7 md:pr-14 mx-auto max-w-full">
      <div className="flex flex-col md:flex-row">
        <div className="pb-7 md:pb-0 flex-grow md:pr-7 w-full md:w-auto">
          <Banner />
          <ResourceCards />
          <WarningCards />
        </div>
        <div className="flex flex-col md:mt-0 md:w-2/5 gap-4">
          <ProgressCards />
        </div>
      </div>
    </main>
  );
}