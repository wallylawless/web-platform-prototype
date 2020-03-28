// @wattpad/app/story-reading-page.js
import WPData from "@wattpad/data/wp-data";
import StoryReadingUI from "@wattpad/ui/pages/story-reading"

export class StoryReadingPage {
  
  register(router) {
    router.get("/:partid/page/:page", this.storyReading)
  }
  
  storyReading(req, res) {
    const readingId = req.params.partId;
    const story = WPData.getStoryFromPart(readingId);
    const { user } = WPData.useCurrentUser();

    return (
      <StoryReadingUI user={user} story={story} />
    )
  }
}
// ***************************************
  
// @wattpad/ui/pages/story-reading.js
import React from "react";
import ReadingHeader from "@wattpad/ui/components/reading-header";
import StoryText from "@wattpad/ui/components/story-text";
import SimilarStories from "@wattpad/ui/components/similar-stories";
import NextPartNav from "@wattpad/ui/components/next-part-nav";
import AuthorColumn from "@wattpad/ui/components/author-column";
import AdUnit from "@wattpad/ui/components/ad-unit";

export function StoryReadingUI(props) {
  const {user, story} = this.props;

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
// ***************************************

// @wattpad/data/wp-data.js
// This is currently the least-thought-through bit. 
import React, { useState, useContext } from "react";
import fetch from "universal-fetch-utility";

export class WPData {
  userContext = React.createContext();
  
  async getStoryFromPart(storyPartId) {
    const partData = await fetch(`https://www.wattpad.com/v4/parts/${storyPartId}`)
    .then((data) => {
      return data;
    });
    const storyData = await fetch(`https://www.wattpad.com/api/v3/stories/${partData.groupid}`)
    .then((data) => {
      return data;
    })
    return storyData;
  }
  
  useCurrentUser() {
    return useContext(this.userContext);
  }
}
// ***************************************