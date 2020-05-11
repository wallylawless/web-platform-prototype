import WPData from "@wattpad/data/wp-data";
import StoryReadingUI from "@wattpad/ui/pages/story-reading"

export class StoryReadingPage {

  storyReading(req, res) {
    const readingId = req.params.partId;
    const story = WPData.getStoryFromPart(readingId);
    const { user } = WPData.useCurrentUser();

    return (
      <StoryReadingUI user={user} story={story} />
    )
  }
}