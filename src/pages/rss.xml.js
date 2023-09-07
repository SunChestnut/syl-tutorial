import rss, {pagesGlobToRssItems} from '@astrojs/rss';

export async function GET() {
    return rss({
        title: 'Syl Tutorial',
        description: 'My journey~',
        site: 'https://syl-tutorial.netlify.app',
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`,
    });
}