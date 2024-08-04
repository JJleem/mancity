import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  APPDownload,
  BottomEnd,
  Goback,
  GobackSection,
  NewsDetailContainer,
  NewsDetailDesc,
  NewsDetailImg,
  NewsDetailInfoInner,
  NewsDetailInner,
  NewsDetailSection,
  NewsDetailSubTitle,
  NewsDetailText,
  NewsDetailTitle,
  NewsDetailTitleText,
  Picture,
  PictureSpecial,
  PictureText,
  Share,
  ShareList,
  Topics,
  TopicsItem,
  TopicsList,
  YoutubeVideo,
} from "./StyleNewsDetail";
import newsdb from "../../data/newsDb.json";
import YouTube from "react-youtube";
import { useNavigate } from "react-router-dom";
import Footer from "../../Component/common/footer/Footer";
import PictureSpecialComponent from "../../Component/detail/PictureSpecialComponent";
import { Helmet } from "react-helmet";
const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goback = () => {
    navigate("/news");
  };

  const onReady = (event: any) => {
    event.target.pauseVideo();
  };

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      mute: 1,
    },
  };
  return (
    <>
      <NewsDetailContainer>
        {newsdb.newsPage
          .filter((newsItem) => newsItem.id === Number(id))
          .map((newsItem, index) => (
            <NewsDetailSection key={newsItem.id}>
              <Helmet>
                <title>{newsItem.title}- Manchester City F.C.</title>
              </Helmet>
              <GobackSection>
                <Goback onClick={goback}>
                  <svg
                    viewBox="0 0 12 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.0008 0.699806L11.0508 1.74981L2.82578 9.9998L11.0508 18.2498L10.0008 19.2998L0.675781 9.9998L10.0008 0.699806Z" />
                  </svg>
                </Goback>
              </GobackSection>

              <NewsDetailInner>
                {newsItem.subdesc === "MATCH HIGHLIGHTS" ||
                newsItem.subdesc === "INTERVIEWS" ||
                newsItem.subdesc === "BEHIND THE SCENES" ? (
                  <YoutubeVideo>
                    <YouTube
                      videoId={newsItem.videoId}
                      opts={opts}
                      onReady={onReady}
                      style={{ height: "100%" }}
                    />
                  </YoutubeVideo>
                ) : (
                  <NewsDetailImg imgs={newsItem.img}></NewsDetailImg>
                )}

                <NewsDetailInfoInner>
                  <NewsDetailTitle>
                    <NewsDetailSubTitle>{newsItem.subdesc}</NewsDetailSubTitle>
                    <NewsDetailTitleText>{newsItem.title}</NewsDetailTitleText>
                    <NewsDetailSubTitle>{newsItem.date}</NewsDetailSubTitle>
                  </NewsDetailTitle>

                  <NewsDetailText>
                    <NewsDetailTitleText>
                      {newsItem.TitleOne}
                    </NewsDetailTitleText>
                    <NewsDetailDesc
                      dangerouslySetInnerHTML={{
                        __html:
                          newsItem.DescOne?.replace(
                            /Oscar Bobb/g,
                            '<a href="/players/oscar-bobb">Oscar Bobb</a>'
                          )
                            .replace(
                              /Jack Grealish/g,
                              '<a href="/players/jack-grealish">Jack Grealish</a>'
                            )
                            .replace(
                              /Ruben Dias/g,
                              '<a href="/players/ruben-dias">Ruben Dias</a>'
                            )
                            .replace(
                              /Erling Haaland/g,
                              '<a href="/players/erling-haaland">Erling Haaland</a>'
                            )
                            .replace(
                              /Ortega Moreno/g,
                              '<a href="/players/ortega-moreno">Ortega Moreno</a>'
                            )
                            .replace(
                              /Ederson/g,
                              '<a href="/players/ederon">Ederson</a>'
                            )
                            .replace(
                              /McAtee/g,
                              '<a href="/players/mcatee">McAtee</a>'
                            )
                            .replace(
                              /Maximo Perrone/g,
                              '<a href="/players/maximo-perrone">Maximo Perrone</a>'
                            )
                            .replace(
                              /Kevin De Bruyne/g,
                              '<a href="/players/kevin-debruyne">Kevin De Bruyne</a>'
                            )
                            .replace(
                              /Foden/g,
                              '<a href="/players/phill-foden">Foden</a>'
                            )

                            .replace(
                              /Pep Guardiola/g,
                              '<a href="/players/pep-guardiola">Pep Guardiola</a>'
                            ) || "",
                      }}
                    ></NewsDetailDesc>
                    <NewsDetailTitleText
                      dangerouslySetInnerHTML={{
                        __html:
                          newsItem.TitleTwo?.replace(
                            /BUY THE THIRD KIT NOW!/g,
                            '<a href="/shop">BUY THE THIRD KIT NOW!</a>'
                          ) || "",
                      }}
                    ></NewsDetailTitleText>
                    <NewsDetailDesc
                      dangerouslySetInnerHTML={{
                        __html:
                          newsItem.DescTwo?.replace(
                            /Oscar Bobb/g,
                            '<a href="/players/oscar-bobb">Oscar Bobb</a>'
                          )
                            .replace(
                              /Jack Grealish/g,
                              '<a href="/players/jack-grealish">Jack Grealish</a>'
                            )
                            .replace(
                              /Ruben Dias/g,
                              '<a href="/players/ruben-dias">Ruben Dias</a>'
                            )
                            .replace(
                              /Erling Haaland/g,
                              '<a href="/players/erling-haaland">Erling Haaland</a>'
                            )
                            .replace(
                              /Ortega Moreno/g,
                              '<a href="/players/ortega-moreno">Ortega Moreno</a>'
                            )
                            .replace(
                              /Ederson/g,
                              '<a href="/players/ederon">Ederson</a>'
                            )
                            .replace(
                              /McAtee/g,
                              '<a href="/players/mcatee">McAtee</a>'
                            )

                            .replace(
                              /Pep Guardiola/g,
                              '<a href="/players/pep-guardiola">Pep Guardiola</a>'
                            ) || "",
                      }}
                    ></NewsDetailDesc>
                    {newsItem.subdesc === "Match Report" ||
                    newsItem.subdesc === "CLUB NEWS " ? (
                      <>
                        <NewsDetailImg imgs={newsItem.Imgtwo}></NewsDetailImg>
                        <NewsDetailTitleText>
                          {newsItem.TitleThree}
                        </NewsDetailTitleText>
                        <NewsDetailDesc
                          dangerouslySetInnerHTML={{
                            __html:
                              newsItem.DescThree?.replace(
                                /Oscar Bobb/g,
                                '<a href="/players/oscar-bobb">Oscar Bobb</a>'
                              )
                                .replace(
                                  /Jack Grealish/g,
                                  '<a href="/players/jack-grealish">Jack Grealish</a>'
                                )
                                .replace(
                                  /Erling Haaland/g,
                                  '<a href="/players/erling-haaland">Erling Haaland</a>'
                                )
                                .replace(
                                  /Ortega Moreno/g,
                                  '<a href="/players/ortega-moreno">Ortega Moreno</a>'
                                )
                                .replace(
                                  /Ederson/g,
                                  '<a href="/players/ederon">Ederson</a>'
                                )
                                .replace(
                                  /McAtee/g,
                                  '<a href="/players/mcatee">McAtee</a>'
                                )

                                .replace(
                                  /Pep Guardiola/g,
                                  '<a href="/players/pep-guardiola">Pep Guardiola</a>'
                                ) || "",
                          }}
                        ></NewsDetailDesc>
                      </>
                    ) : null}
                    <APPDownload>
                      <Link to="/app">DOWNLOAD THE MAN CITY APP</Link>
                    </APPDownload>
                    {newsItem.subdesc === "Picture Special" ||
                    newsItem.subdesc === "EDS & ACADEMY" ||
                    newsItem.subdesc === "PICTURE SPECIAL" ||
                    newsItem.subdesc === "CLUB NEWS" ? (
                      <PictureSpecialComponent picture={newsItem.picture} />
                    ) : (
                      <BottomEnd>
                        <Topics>
                          TOPICS
                          <TopicsList>
                            {newsItem.topics &&
                              Object.values(newsItem.topics).map(
                                (topic, topicIndex) => (
                                  <TopicsItem key={topicIndex}>
                                    {topic}
                                  </TopicsItem>
                                )
                              )}
                          </TopicsList>
                        </Topics>
                        <Share>
                          SHARE
                          <ShareList>
                            <div>
                              <svg
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                                  fill="transparent"
                                />
                                <path
                                  d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                            <div>
                              <svg
                                width="24px"
                                height="24px"
                                viewBox="0 0 22 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.244 0.25H20.552L13.325 8.51L21.827 19.75H15.17L9.956 12.933L3.99 19.75H0.679998L8.41 10.915L0.253998 0.25H7.08L11.793 6.481L17.244 0.25ZM16.083 17.77H17.916L6.084 2.126H4.117L16.083 17.77Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                            <div>
                              <svg
                                width="24px"
                                height="24px"
                                viewBox="0 0 25 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.938721 1.71921C0.938721 0.769972 1.73275 0 2.71227 0H23.1652C24.1447 0 24.9387 0.769972 24.9387 1.71921V22.2808C24.9387 23.2303 24.1447 24 23.1652 24H2.71227C1.73275 24 0.938721 23.2303 0.938721 22.2808V1.71921Z"
                                  fill="transparent"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M8.85966 20V9.20427H5.21543V20H8.85966ZM7.03753 7.7303C8.30834 7.7303 9.09932 6.90131 9.09932 5.86531C9.07564 4.80599 8.30835 4 7.06164 4C5.81505 4 5 4.80599 5 5.86531C5 6.90131 5.79081 7.7303 7.01377 7.7303H7.03753Z"
                                  fill="white"
                                  id="play"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M10.876 20H14.5202V13.9712C14.5202 13.6486 14.5439 13.3262 14.6401 13.0956C14.9035 12.4509 15.5032 11.7832 16.5099 11.7832C17.8286 11.7832 18.3561 12.7732 18.3561 14.2245V20H22V13.8099C22 10.4939 20.2021 8.95094 17.8045 8.95094C15.8385 8.95094 14.9755 10.0329 14.4959 10.7699H14.5203V9.20427H10.8761C10.9239 10.2173 10.876 20 10.876 20Z"
                                  fill="white"
                                  id="play"
                                />
                              </svg>
                            </div>
                          </ShareList>
                        </Share>
                      </BottomEnd>
                    )}
                  </NewsDetailText>
                </NewsDetailInfoInner>
              </NewsDetailInner>
            </NewsDetailSection>
          ))}
        <Footer />
      </NewsDetailContainer>
    </>
  );
};

export default NewsDetail;
