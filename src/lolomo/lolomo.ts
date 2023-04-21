import { MAX_VIDEO_LENGTH } from "../consts";
import { Lolomo, Video } from "../types";
import { rando, randomString } from "../utils";

const descriptions: string[] = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim. Ullamcorper velit sed ullamcorper morbi. Ultricies integer quis auctor elit. At urna condimentum mattis pellentesque id nibh tortor id. Mauris rhoncus aenean vel elit. Rhoncus urna neque viverra justo. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Erat pellentesque adipiscing commodo elit at. Condimentum id venenatis a condimentum vitae. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu.",
    "Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Auctor eu augue ut lectus arcu bibendum at varius. Urna porttitor rhoncus dolor purus non enim. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Curabitur gravida arcu ac tortor dignissim convallis aenean. Nullam vehicula ipsum a arcu cursus vitae. Massa tincidunt nunc pulvinar sapien. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Malesuada bibendum arcu vitae elementum curabitur vitae. Sed risus ultricies tristique nulla aliquet. In fermentum posuere urna nec tincidunt praesent semper. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Mattis ullamcorper velit sed ullamcorper morbi. Leo urna molestie at elementum eu facilisis sed. Urna id volutpat lacus laoreet non curabitur. Porttitor lacus luctus accumsan tortor posuere ac ut. Vitae semper quis lectus nulla at. At lectus urna duis convallis convallis tellus.",
    "A erat nam at lectus urna duis. Eget gravida cum sociis natoque penatibus. Fusce ut placerat orci nulla pellentesque dignissim. Vel eros donec ac odio tempor orci. Elit eget gravida cum sociis. Molestie ac feugiat sed lectus vestibulum. Ultricies lacus sed turpis tincidunt id. Arcu bibendum at varius vel pharetra vel. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Rhoncus mattis rhoncus urna neque. Enim praesent elementum facilisis leo. Quisque non tellus orci ac auctor augue mauris. Vitae et leo duis ut diam quam nulla porttitor massa.",
    "Diam ut venenatis tellus in metus vulputate. Vulputate dignissim suspendisse in est ante. Sit amet purus gravida quis blandit. Fermentum et sollicitudin ac orci phasellus egestas tellus. In ante metus dictum at tempor commodo ullamcorper a. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Mauris sit amet massa vitae tortor. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Netus et malesuada fames ac turpis egestas. Ultrices vitae auctor eu augue ut. Feugiat in ante metus dictum. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Urna porttitor rhoncus dolor purus non enim. Orci dapibus ultrices in iaculis nunc sed. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Pretium vulputate sapien nec sagittis aliquam malesuada. Et tortor at risus viverra adipiscing at in tellus integer. Vehicula ipsum a arcu cursus vitae. Posuere urna nec tincidunt praesent. Cras semper auctor neque vitae tempus quam pellentesque nec nam.",
    "Consectetur adipiscing elit duis tristique. Orci dapibus ultrices in iaculis. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Netus et malesuada fames ac turpis egestas integer eget aliquet. Quam nulla porttitor massa id neque aliquam. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Lacus viverra vitae congue eu consequat ac felis donec. In arcu cursus euismod quis viverra nibh cras. Accumsan lacus vel facilisis volutpat est. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Metus aliquam eleifend mi in nulla posuere sollicitudin.",
];

const titles: string[] = [
    "ThePrimeagen",
    "TrashDev",
    "Teej_dv",
    "WarrenBuffering",
    "Theo",
    "BashBunni",
    "RoxCar76",
    "FlipEdits",
];

const boxArts: string[] = [
    "https://i.ytimg.com/vi/5qap5aO4i9A/maxresdefault.jpg",
    "https://pbs.twimg.com/profile_images/1605762947686375425/lsoGWWty_400x400.jpg",
    "https://pbs.twimg.com/profile_images/1598959528518643713/aWdwBYxv_400x400.jpg",
    "https://pbs.twimg.com/profile_images/1628555572088913923/m370a_-w_400x400.jpg",
    "https://pbs.twimg.com/profile_images/1641553030335315968/v9hikrL3_400x400.jpg",
    "https://pbs.twimg.com/profile_images/1631383564792238080/_i8ZwdU5_400x400.jpg",
    "https://pbs.twimg.com/profile_images/1613151603564986368/dZoNeRKn_400x400.jpg",
    "https://pbs.twimg.com/profile_images/1602885850550792192/gg-a_Mun_400x400.jpg",
    "https://pbs.twimg.com/profile_images/1614986714795180033/yOQly3os_400x400.jpg",
];

const HOUR = 60 * 60 * 1000;

const videos: Video[] = new Array(MAX_VIDEO_LENGTH).fill(0).map((_, i) => {
    return {
        id: i,
        title: titles[rando(titles.length)],
        description: descriptions[rando(descriptions.length)],
        boxArt: boxArts[rando(boxArts.length)],
        duration: HOUR + rando(0.5 * HOUR) + rando(0.5 * HOUR) + rando(0.5 * HOUR),
    };
});

export function createLolomo(): Lolomo {
    return {
        id: randomString(16),
        lists: new Array(10).fill(0).map(() => {
            return {
                id: randomString(16),
                videos: new Array(10).fill(0).map(() => {
                    return videos[rando(videos.length)];
                })
            };
        }),
    };
}

export function createLolomoProto():

