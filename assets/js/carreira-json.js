document.addEventListener("DOMContentLoaded", () => {
    fetch("assets/data/carreira.json")
        .then(response => response.json())
        .then(data => {
            // Injeta os dados do perfil
            document.getElementById("profile-name").innerText = data.profile.name;
            document.getElementById("profile-headline").innerText = data.profile.headline;
            document.getElementById("profile-summary").innerText = data.profile.summary;
            
            // Botão do currículo
            const cvButton = document.getElementById("cv-link");
            if (cvButton && data.profile.cvLink) {
                cvButton.href = data.profile.cvLink;
            }

            // Injeta os contatos exibindo o endereço de e-mail real para clique ou cópia
            const contactList = document.getElementById("contact-list");
            contactList.innerHTML = ""; 
            data.profile.contacts.forEach(c => {
                if (c.type.toLowerCase() === "e-mail" || c.type.toLowerCase() === "email") {
                    // Exibe o e-mail real direto na tela para a pessoa poder ler, copiar ou clicar
                    contactList.innerHTML += `<li><strong class="text-white">E-mail:</strong> <a href="${c.url}">contatopaulohqueiroz@gmail.com</a></li>`;
                } else {
                    contactList.innerHTML += `<li><a href="${c.url}" target="_blank">${c.type}</a></li>`;
                }
            });

            // Linha do tempo (Mapa de Carreira)
            const timeline = document.getElementById("career-timeline");
            timeline.innerHTML = "";
            data.careerSteps.forEach(step => {
                const softSkillsHtml = step.softSkills.map(s => `<li>${s}</li>`).join("");
                const roadmapHtml = step.roadmap.map(r => `<span class="badge-roadmap me-1 d-inline-block mb-1">${r}</span>`).join("");
                
                timeline.innerHTML += `
                    <div class="mb-5 position-relative ps-3">
                        <div class="position-absolute rounded-circle" style="width:12px; height:12px; left:-22px; top:6px; background-color:#121212; border:2px solid #6d28d9;"></div>
                        <h3 class="h5 fw-bold text-white mb-2">${step.title}</h3>
                        <p class="mb-2" style="font-size:0.95rem; text-align: justify; color: #cbd5e1;">${step.description}</p>
                        <p class="mb-1 text-white-50 small"><strong>Soft skills exigidas para essa etapa</strong></p>
                        <ul class="mb-3" style="color: #94a3b8;">${softSkillsHtml}</ul>
                        <p class="mb-2 text-white-50 small"><strong>Roadmap de aprendizado</strong></p>
                        <div class="mb-2">${roadmapHtml}</div>
                    </div>`;
            });

            // Barras de progresso das Skills
            const skillGroups = document.getElementById("skill-groups");
            skillGroups.innerHTML = "";
            data.skillGroups.forEach(g => {
                let skillsHtml = `<h3 class="h6 fw-bold mt-4 mb-2" style="color: #a78bfa;">${g.category}</h3>`;
                g.skills.forEach(s => {
                    skillsHtml += `
                        <div class="mb-2">
                            <div class="mb-1 small" style="color: #f1f5f9; font-weight: 500;">${s.name}</div>
                            <div class="progress" style="height: 8px; border-radius: 4px; background-color: #334155;">
                                <div class="progress-bar" role="progressbar" style="width: ${s.level}%; background-color: #6d28d9;"></div>
                            </div>
                        </div>`;
                });
                skillGroups.innerHTML += skillsHtml;
            });

            // Outras competências
            const otherSkills = document.getElementById("other-skills");
            otherSkills.innerHTML = "";
            data.otherSkills.forEach(skill => {
                otherSkills.innerHTML += `<li class="list-inline-item"><span class="badge bg-dark border border-secondary text-light mb-1 px-2 py-1" style="font-size:0.8rem;">${skill}</span></li>`;
            });

            // Idiomas
            const langList = document.getElementById("language-list");
            langList.innerHTML = "";
            data.languages.forEach(l => {
                langList.innerHTML += `<li class="mb-2 text-white" style="font-size:0.95rem;">${l.name} <span style="color: #94a3b8;">(${l.level})</span></li>`;
            });
        })
        .catch(error => console.error("Erro ao processar mapeamento:", error));
});