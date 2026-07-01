import { BlogPostProps } from "@types"

import {
  PostParagraph,
  Post,
  PostSection,
  PostLink,
  PostUnorderedList,
  PostYouTubeIframe,
} from "@components/posts/post"

export function OneYearInAsia({ post }: BlogPostProps) {
  return (
    <Post data={post}>
      <PostSection>
        <PostParagraph>
          Here goes a summary of my one year experience in
          Asia.
        </PostParagraph>
        <PostYouTubeIframe
          src="https://www.youtube.com/embed/6eYDAIJXLso?si=6L1f0IT8cIDQC8iB"
          title="One Year in Asia | A Summary"
        />
        <PostParagraph>
          In general, I find it very hard to talk into the
          void, without anyone else for me to bounce things
          off. If you feel it&apos;s annoying to watch, I
          suggest increasing the video speed.
        </PostParagraph>
        <PostParagraph>
          My favorite part of that video is for sure the
          outro, which represents a lot to me personally.
        </PostParagraph>
        <PostParagraph>
          The links mentioned in the video:
        </PostParagraph>
        <PostUnorderedList>
          <li>
            <PostLink href="https://docs.google.com/presentation/d/1z8tXnScZzT9j17iUZSuiYhfgSR4JkmZHfNOUtb2GVuE/edit?usp=sharing">
              The presentation I used
            </PostLink>
          </li>
          <li>
            Schools:
            <PostUnorderedList>
              <li>
                <PostLink href="https://hondojo.com/">
                  Hon Dojo
                </PostLink>
              </li>
              <li>
                <PostLink href="https://www.bibabaduk.online/">
                  BIBA
                </PostLink>
              </li>
              <li>
                <PostLink href="https://mp.weixin.qq.com/s/fSfkiY4AGNiu-uwZZCdSUw">
                  Quzhou Ge Yuhong Go Academy
                </PostLink>
              </li>
            </PostUnorderedList>
          </li>
          <li>
            My Instagram Posts (
            <PostLink href="https://www.instagram.com/fanaro009/">
              @fanaro009
            </PostLink>
            ):
            <PostUnorderedList>
              <li>
                <PostLink href="https://www.instagram.com/fanaro009/saved/japan-feb-may-2025/17939789220023192/">
                  Japan 2025
                </PostLink>
              </li>
              <li>
                <PostLink href="https://www.instagram.com/fanaro009/saved/korea-2025/18083103910731651/">
                  Korea 2025
                </PostLink>
              </li>
              <li>
                <PostLink href="https://www.instagram.com/fanaro009/saved/korea-2026/18126693523473867/">
                  Japan 2026
                </PostLink>
              </li>
            </PostUnorderedList>
          </li>
          <li>
            101weiqi pages mentioned:
            <PostUnorderedList>
              <li>
                <PostLink href="https://www.101weiqi.com/search/">
                  Search
                </PostLink>
              </li>
              <li>
                <PostLink href="https://www.101weiqi.com/input/">
                  Creation
                </PostLink>
              </li>
            </PostUnorderedList>
          </li>
          <li>
            <PostLink href="https://youtu.be/U88jj6PSD7w">
              Slavoj Zizek on being happy vs interesting.
            </PostLink>
          </li>
        </PostUnorderedList>
      </PostSection>
    </Post>
  )
}
