import { cn } from '@/lib/utils';
import { Chapter, Course, Unit } from '@prisma/client';
import Link from 'next/link';
import { FC } from 'react';
import { Separator } from './ui/separator';

interface CourseSideBarProps {
  course: Course & {
    units: (Unit & {
      chapters: Chapter[];
    })[];
  };
  currentChapterId?: string;
}

const CourseSideBar: FC<CourseSideBarProps> = async ({ course, currentChapterId }) => {
  return (
    <div className="w-[400px] absolute p-6 rounded-r-3xl bg-secondary mt-10">
      <h1 className="text-4xl font-bold mt-4">{course.name}</h1>
      {course.units.map((unit, unitIndex) => {
        return (
          <div key={unit.id} className="mt-4">
            <h2 className="text-sm uppercase text-secondary-foreground/60">Unit {unitIndex + 1}</h2>
            <h2 className="text-2xl font-bold">{unit.name}</h2>
            {unit.chapters.map((chapter, chapterIndex) => {
              return (
                <div key={chapter.id}>
                  <Link
                    href={`/course/${course.id}/${unitIndex}/${chapterIndex}`}
                    className={cn('text-secondary-foreground/60', {
                      'text-green-500 font-bold': chapter.id === currentChapterId,
                    })}
                  >
                    {chapter.name}
                  </Link>
                </div>
              );
            })}
            <Separator className="mt-2 text-gray-500 bg-gray-500" />
          </div>
        );
      })}
    </div>
  );
};

export default CourseSideBar;
