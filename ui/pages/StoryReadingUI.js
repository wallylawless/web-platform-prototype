import React from "react";
import ReadingHeader from "@wattpad/ui/components/reading-header";
import StoryText from "@wattpad/ui/components/story-text";
import SimilarStories from "@wattpad/ui/components/similar-stories";
import NextPartNav from "@wattpad/ui/components/next-part-nav";
import AuthorColumn from "@wattpad/ui/components/author-column";
import AdUnit from "@wattpad/ui/components/ad-unit";

export function StoryReadingUI(props) {
  const {user, story} = props;

  return (
    <React.Fragment>
      <ReadingHeader story={story}></ReadingHeader>
      <h1>{story.currentPart.title}</h1>
      <div id="reading-container">
        <div class="start-rail">
          <AuthorColumn author={story.author} />
        </div>
        <main>
          <StoryText text={story.currentPart} />
        </main>
        <div class="end-rail">
          <AdUnit name="story-reading-top" />
          <SimilarStories currentStory={story} />
          <AdUnit name="story-reading-mid" />
        </div>
      </div>
      <NextPartNav nextPart={story.nextPart}/>
      <Comments storyPart={story.currentPart} />
      <AdUnit name="story-reading-botton" />
    </React.Fragment>
  )
}