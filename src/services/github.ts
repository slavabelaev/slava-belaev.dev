import {Project} from '../types/models/Project';

const apiUrl = 'https://api.github.com';
const userContentApiUrl = 'https://raw.githubusercontent.com';
const username = 'slavabelaev';
const clientId = 'd3912c53bb6454449923';
const clientSecret = 'f8a18006358fc6e234dc42709ee89f93fa149efb';

const createdLastFirst = (a: Project, b: Project) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime();

export function fetchProjects(): Promise<Project[]> {
    return fetch(`${apiUrl}/users/${username}/repos?client_id=${clientId}&client_secret=${clientSecret}`)
        .then(response => response.json())
        .then(projects => projects?.sort(createdLastFirst));
}

export function fetchProjectPreviews(name: string) {
    const imageBaseUrl = `${userContentApiUrl}/${username}/${name}/master/previews/`;
    return fetch(`${apiUrl}/repos/${username}/${name}/contents/previews`)
        .then(response => response.json())
        .then(files => {
            const fileNames: string[] = [];
            const images: any[] = [];

            files.forEach((file: any) => {
                let isFolder = !file.name.includes('.');

                if (isFolder) return true;

                const fileName = file.name.match(/.*?(?=\.)/)[0];
                if (!fileNames.includes(fileName)) {
                    fileNames.push(fileName);

                    (fileName === 'index' || fileName === 'home' || fileName === 'start') ?
                        images.unshift(file.name) :
                        images.push(file.name);
                }
            });

            return images.map(image => imageBaseUrl + image);
        });
}
