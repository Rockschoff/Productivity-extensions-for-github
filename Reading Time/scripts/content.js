const article = document.querySelector("article")
// console.log("here")
if(article){
    // console.log("here")
    const text = article.textContent;
    const wordMatchRegExp = /[^\s]+/g // regular expression

    const words = text.matchAll(wordMatchRegExp)

    const wordCount = [...words].length;

    const readingTime = Math.round(wordCount/200);
    // console.log(readingTime)
    const badge = document.createElement("p")

    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `${readingTime} min read`;

    // Support for API reference docs
  const heading = article.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);

}
