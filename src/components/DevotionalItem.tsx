import Image from "next/image";
import Link from "next/link";
import { ButtonArrow } from "./ButtonArrow";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

interface DevotionalItemProps {
    id: string,
    title: string,
    author: string,
    date: string,
    resume: string,
    imgUrl: string,
}

export function DevotionalItem({ id, author, date, imgUrl, resume, title }: DevotionalItemProps) {


    return (
        <Link href={`/devocionais/${id}`} className="group">
            <div className="flex max-w-[772px] flex-col items-start gap-3 mb-24">
                <Image
                    src={imgUrl}
                    width={772}
                    height={514}
                    alt="Image Example"
                    className="h-[514px] w-[772px] object-cover"
                />
                <div>
                    <h2 className="pb-[6px] text-4xl font-bold text-black">
                        {title}
                    </h2>
                    <h4 className="text-sm text-gray-regular">
                        Publicado por{" "}
                        <span className="font-medium">{author}</span> • {" "}
                        {format(date, "dd 'de' ", { locale: ptBR })}
                        <span className="capitalize">{format(date, "MMMM", { locale: ptBR })}</span>
                        {format(date, ", yyyy", { locale: ptBR })}
                    </h4>
                </div>
                <p className="text-lg text-gray-medium">
                    {resume}
                </p>

                <ButtonArrow />
            </div>
        </Link>
    )
}
