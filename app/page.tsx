// src/utils/parseTelegramData.ts
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import rawData from '@/json/telegram_messages.json'; // Укажите правильный путь к вашему JSON

export interface ProductCard {
    id: number | string;
    title: string;
    description: string;
    price: string;
    tag: string;
    image: string;
}

export function transformTelegramData(rawData: any[]): ProductCard[] {
    return rawData
        .filter((item) => {
            // Оставляем только сообщения с фото и непустым текстом
            return (
                item.media_type === 'MessageMediaPhoto' &&
                item.text &&
                item.text.trim().length > 10
            );
        })
        .map((item) => {
            const text = item.text;
            const lines = text
                .split('\n')
                .map((l: string) => l.trim())
                .filter((l: string) => l.length > 0);

            // 1. Извлекаем цену (ищем числа после слова "Цена")
            const priceMatch = text.match(
                /(?:Цена|🎁Цена|🔥Цена|⭐️Цена)\s*[: ]\s*([\d\s\.]+)/i
            );
            const price = priceMatch
                ? `${priceMatch[1].replace(/\s/g, '')} ₽`
                : 'Цена уточняется';

            // 2. Извлекаем тег (хештег)
            const tagMatch = text.match(/(#[\wа-яА-Я]+)/);
            const tag = tagMatch ? tagMatch[1] : '#Товар';

            // 3. Извлекаем название и описание, отфильтровывая мусор (коды, город, цену)
            const meaningfulLines = lines.filter(
                (line: string) =>
                    !line.match(/^\d{4}\//) && // Пропускаем строки типа "3010/018"
                    !line.toLowerCase().includes('воскресенская') &&
                    !line.toLowerCase().includes('стёпка') &&
                    !line.toLowerCase().includes('подстепки') &&
                    !line.includes('Цена') &&
                    !line.startsWith('#') &&
                    !line.includes('Количество:') // Иногда лучше вынести это в описание, но для заголовка уберем
            );

            let title = 'Название товара';
            let description = '';

            if (meaningfulLines.length > 0) {
                title = meaningfulLines[0]; // Первая осмысленная строка - обычно название
                description = meaningfulLines.slice(1, 4).join('. '); // Следующие 2-3 строки - описание
            } else {
                // Запасной вариант, если парсинг не сработал
                title = lines.find((l: string) => l.length > 15) || 'Товар';
                description = text.substring(0, 100) + '...';
            }

            // 4. Формируем путь к изображению (добавляем слэш в начале, если его нет, для Next.js)
            const imagePath = item.media_path.startsWith('/')
                ? item.media_path
                : `/${item.media_path}`;

            return {
                id: item.id,
                title,
                description,
                price,
                tag,
                image: imagePath,
            };
        });
}

// app/page.tsx (или pages/index.tsx)

export default function Home() {
    // Преобразуем сырые данные в удобный формат при рендере (или в server component)
    const cardsData = transformTelegramData(rawData);
	
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <div className="flex-grow py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                        Наши предложения
                    </h1>
                    <p className="text-gray-500 text-center mb-8">
                        Найдено товаров: {cardsData.length}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {cardsData.map((card) => (
                            <Card
                                key={card.id}
                                title={card.title}
                                description={card.description}
                                price={card.price} // Добавили цену
                                tag={card.tag}
                                image={card.image}
                            />
                        ))}
                    </div>

                    {cardsData.length === 0 && (
                        <p className="text-center text-gray-500 mt-10">
                            Товары не найдены или файл данных пуст.
                        </p>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}
